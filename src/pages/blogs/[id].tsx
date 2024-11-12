import axios from 'axios'
import React from 'react'

type Props = {
    params:{id:number}
}

const BlogDetail = ({data}:{data:any}) => {
    console.log(data);
    
  return (
    <div>
        <img src={data.featured_media_src_url}/>
        <h1>{data.title.rendered}</h1>
        <div className='description'>
        {data.content.rendered}
        </div>
    </div>
  )
}

export default BlogDetail
export const getServerSideProps = async ({params}:Props)=>{
    try {
        const {data} = await axios.get(`https://workshop.webopsagency.com/wp-json/wp/v2/posts/${params.id}`)
        return {
            props:{
                data:data
            }
        }
    } catch (error) {
        
    }
}