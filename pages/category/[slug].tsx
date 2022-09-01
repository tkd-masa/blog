import { getAllCategories } from "lib/api";
import Container from 'components/container'
import PostHeader from 'components/post-header'
import type { GetStaticProps } from 'next'

type Props = {
    name: string
}

const Category = ({ name }: Props) => {
    return (
        <Container>
            <PostHeader title={name} subtitle="Blog Category"/>
        </Container>
    )
}

export default Category

export const getStaticPaths = async () => {
    return {
        paths: ['/category/vue'],
        fallback: false
    }
}

export const getStaticProps:GetStaticProps<Props> = async (context) => {
    const vueSlug = context.params?.slug

    const allVue = await getAllCategories()
    const vue = allVue.find(({ slug }: {slug: string}) => slug === vueSlug)

    return {
        props: {
            name: vue.name
        }
    }
}