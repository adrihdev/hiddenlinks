import Link from "next/link";
import {Home} from "lucide-react"

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
            <div className="text-center space-y-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-mood-puzzled mx-auto"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M14.986 3.51a9 9 0 1 0 1.514 16.284c2.489 -1.437 4.181 -3.978 4.5 -6.794"/>
                    <path d="M10 10h.01"/>
                    <path d="M14 8h.01"/>
                    <path d="M12 15c1 -1.333 2 -2 3 -2"/>
                    <path d="M20 9v.01"/>
                    <path d="M20 6a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"/>
                </svg>
                <h1 className="text-2xl font-semibold text-gray-200"> 404 Not Found.
                </h1>
                <h2 className="text-2xl font-light font-mono text-gray-200"> ¡Vaya! No hemos
                    encontrado esta página.
                </h2>
                <div className="flex flex-col items-center justify-center text-gray-200 hover:text-gray-300">
                    <Link href="/" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2">
                        <Home size={20} />
                        <span>Volver al inicio</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
