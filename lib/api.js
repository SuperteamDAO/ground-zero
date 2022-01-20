import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { unfurl } from 'unfurl.js'

const contentDirectory = join(process.cwd(), '_content');

export function readContentList() {
  return 
}

export function getContentList() {
  const content =fs.readFileSync(`${contentDirectory}/summary.json`, 'utf-8');
  return JSON.parse(content || "{}");
}

export function getPage({path, topic}) {
  const fullPath = join(contentDirectory, `/${path}/${topic}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { data, content };
}

export async function getModifiedPage(page) {
  let finalPage = page;
  var rx = /<p>\{% embed url="(.*)" %\}<\/p>/g;  // /\nSUMMARY:(.*)\n/g;
  const embeds = [];
  let m;
  do {
    m = rx.exec(finalPage);
    if (m) {
      embeds.push({
        string: m[0],
        url: m[1]
      })
    }
  } while (m);
  for (let i = 0; i < embeds.length; i++) {
    try {
      const result = await unfurl(embeds[i].url);
      let html = result?.oEmbed?.html;
      if (html) {
        html = html.replace('width="200" height="113"', 'width="100%" height="576"')
        finalPage = finalPage.replace(embeds[i].string, `<div class="mb-10">${html}</div>`);
      } else {
        const section = `
        <div className="mb-14">
          <div className="text-white bg-gray-900 px-6 py-3 rounded-md">
            <a className="" href="${embeds[i].url}" target="_blank" rel="noreferrer">
              <p className="text-white font-bold mb-1 mt-0">${result?.twitter_card?.title || result?.open_graph?.title || result?.title}</p>
              <p className="text-white text-sm m-0">${result?.twitter_card?.description || result?.open_graph?.description}</p>
            </a>
          </div>
        </div>`;
        finalPage = finalPage.replace(embeds[i].string, section);
      }
    } catch (e) {
      finalPage = finalPage.replace(embeds[i].string, embeds[i].url);
    }
  }
  return finalPage;
}



// IGNORE BELOW THIS

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
