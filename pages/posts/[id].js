import { Table } from "flowbite-react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useEffect } from "react";

const fetcher = (url) => fetch(url).then((res)=>res.json());

export default function Post({ staticPost, receiptCode }) {
    const router = useRouter();
    const {data: post, mutate} = useSWR(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}app/ReceiptCodes/${receiptCode}`,
        fetcher,
        {
            fallbackData: staticPost
        }
    );
    useEffect(()=>{
        mutate();
    }, []);
    if (router.isFallback || !post) {
        return <div>Loading...</div>
    }
    if (!post.ReceiptCode) {
        return <Layout title="レセ電コードが見つかりません">
            <p>そのコードは存在しません</p>
            <Link href="/receipt-search">
                <div className="flex cursor-pointer mt-12">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 mr-3">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" 
                            />
                    </svg>
                    <span>戻る</span>
                </div>
            </Link>
        </Layout>
    }

    return (
        <Layout title={post.ReceiptName}>
            <div className="p-5">
                <Table>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="bg-gray-100 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                診療行為コード
                            </Table.Cell>
                            <Table.Cell>
                                {post.ReceiptCode}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="bg-gray-100 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                診療行為名称
                            </Table.Cell>
                            <Table.Cell>
                                {post.ReceiptName}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="bg-gray-100 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                点数
                            </Table.Cell>
                            <Table.Cell>
                                {post.Points}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="bg-gray-100 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                入外
                            </Table.Cell>
                            <Table.Cell>
                                {post.InOutDiv}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="bg-gray-100 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                区分
                            </Table.Cell>
                            <Table.Cell>
                                {post.Category}
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                <Link href="/receipt-search">
                    <div className="flex cursor-pointer mt-12">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 mr-3">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" 
                                />
                        </svg>
                        <span>戻る</span>
                    </div>
                </Link>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = await getAllPostIds();

    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const { post: staticPost } = await getPostData(params.id);
    return {
        props: {
            receiptCode: staticPost.ReceiptCode,
            staticPost,
        },
        revalidate: 3,
    };
}