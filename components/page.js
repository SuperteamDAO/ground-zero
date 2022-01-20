import { Fragment } from "react";
import { useRouter } from 'next/router';
import { GITHUB_URL } from '/lib/constants';
import markdownStyles from './markdown-styles.module.css';

export default function Page({ data, page }) {
  const router = useRouter();
  const { asPath } = router;
  return (
    <>
      {(data?.title ||data?.authors) && (
        <div className="mb-8">
          {data?.title && (<h1 className="text-6xl font-heading font-extrabold text-accent">{data?.title}</h1>)}
          {data?.authors && (<div className="flex justify-start items-center">
            <p className="text-gray-400 text-sm font-button">By {
              data?.authors?.map((author, index) => (
                <Fragment key={index}>
                  <a href={author.url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-secondary hover:underline">{author?.name}</a>
                  {index < data?.authors.length - 2 ? ", " : index === data?.authors.length - 2 ? " & " : ""}
                </Fragment>
              ))
            }</p>
            <p className="text-gray-200 mx-1">·</p>
            <a className="text-gray-400 text-sm hover:text-secondary hover:underline" href={`${GITHUB_URL}${asPath}.md`} target="_blank" rel="noreferrer">Edit on Github</a>
          </div>)}
        </div>
      )}
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: page }}
      />
    </>
  )
}
