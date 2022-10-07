import Link from "next/link"
import Layout from "../components/Layout"


const customErrorParge = () => {
    return (
        <Layout>
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
    )
}

export default customErrorParge