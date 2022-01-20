import Layout from '/components/layout'
import  { getContentList } from '/lib/api';

export default function Index({ contentList }) {
  return (
    <>
      <Layout contentList={contentList}>
        <div className="container mx-auto px-5 min-h-100">
          Hello!
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const contentList = getContentList();

  return {
    props: { contentList },
  }
}
