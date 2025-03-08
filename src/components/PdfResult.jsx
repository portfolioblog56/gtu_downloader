import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function PdfResult({ pdfUrl, props }) {
    return (
        <div className="relative w-full max-w-4xl h-[600px] border rounded-lg shadow">
            <iframe
                src={pdfUrl}
                className="w-full h-full rounded-md shadow-md"
                title={props.title}
                loading="lazy"
                onError={() => toast.error("Failed to load PDF", { position: "bottom-right", autoClose: 4000 })}
            />
            <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
            >
                Download Syallbus
            </a>
        </div>
    );
};