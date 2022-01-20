import  { getContentList, getPage, getModifiedPage } from '/lib/api';
import markdownToHtml from '/lib/markdownToHtml';
import Layout from '/components/layout';
import Page from '/components/page';

export default function TopicPage({ contentList, page, data }) {
  return (
    <>
      <Layout contentList={contentList}>
        <div className="container mx-auto px-5 py-14 min-h-100">
          <Page data={data} page={page} />
        </div>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const contentList = getContentList();
  const pathsList = ([].concat(...contentList.map(page => page.pages)))
  const paths = pathsList?.map((subPage) => {
    const [path, topic] = subPage.path.replace(".md", "").split("/");
    return {
      params: {
        path,
        topic
      }
    };
  });
  
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const contentList = getContentList();
  const {data, content} = getPage(params);
  const tempPage = await markdownToHtml(content || '');
  const page = await getModifiedPage(tempPage);
  return {
    props: { contentList, page, data },
  }
}
