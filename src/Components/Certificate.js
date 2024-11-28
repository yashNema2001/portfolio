import React, { useEffect, useState } from 'react';
import { BsDownload } from "react-icons/bs";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import pdf2 from "../jc.pdf";
import pdf1 from "../yn.pdf";
 pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


const Certificate = () => {
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    const scale = width < 700 ? (width > 475 ? 0.5 : 0.4) : 0.8;
  
    return (
      <div className='ResumePage'>
        {/* First Certificate */}
        <div className="certificate-section">
          <Document file={pdf1} className="certificate-view">
            <Page pageNumber={1} scale={scale} />
          </Document>
          <a href={pdf1} target='_blank' download="Devansh's Certificate 1" rel="noopener noreferrer">
            <button className='downloadCV' type='button'>
              <h3><BsDownload />&nbsp; Download Certificate 1</h3>
            </button>
          </a>
        </div>
  
        {/* Second Certificate */}
        <div className="certificate-section">
          <Document file={pdf2} className="certificate-view">
            <Page pageNumber={1} scale={scale} />
          </Document>
          <a href={pdf2} target='_blank' download="Devansh's Certificate 2" rel="noopener noreferrer">
            <button className='downloadCV' type='button'>
              <h3><BsDownload />&nbsp; Download Certificate 2</h3>
            </button>
          </a>
        </div>
      </div>
    );
  };
  
  export default Certificate;