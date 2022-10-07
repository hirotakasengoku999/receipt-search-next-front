import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, title="Receipt search" }) {
    return (
        <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm">
            <Head>
                <title>{title}</title>
            </Head>
            <header>
                <nav className="bg-gray-800 w-screen">
                    <div className="flex items-center pl-8 h-10">
                        <div className="flex space-4">
                            <Link href="/receipt-search">
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                    レセ電コード検索
                                </a>
                            </Link>
                            {/* <Link href="/import-file">
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                    ファイルインポート
                                </a>
                            </Link> */}
                        </div>
                    </div>
                </nav>
            </header>
            <main className="flex flex-1 justify-center items-center flex-col w-screen">
                {children}
            </main>
        </div>
    )
}