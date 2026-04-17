import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FileText, Download, Lock } from "lucide-react";

// ✅ Import PDFs (Vite-safe)
import prospectusPDF from "/assets/7/12.pdf";
import kharediKhatPDF from "/assets/7/kharedi_khat.pdf";

export default function Private() {
  const navigate = useNavigate();
  const location = useLocation();

  // 🔐 AUTH CHECK
  useEffect(() => {
    const token = localStorage.getItem("token"); // ✅ correct key

    if (!token) {
      // 🔁 redirect to admin login & remember this page
      navigate("/admin/login", {
        replace: true,
        state: { from: location.pathname },
      });
    }
  }, [navigate, location]);

  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Lock className="text-primary" />
          <h1 className="text-3xl font-bold text-neutral-dark">
            Private Documents
          </h1>
        </div>

        {/* PDF LIST */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* PDF 1 */}
          <div className="bg-white rounded-xl shadow p-6 border">
            <div className="flex items-start gap-4">
              <FileText className="text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">
                  College Prospectus
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Complete course & admission details
                </p>

                <a
                  href={prospectusPDF}
                  download
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                >
                  <Download size={16} />
                  Download PDF
                </a>
              </div>
            </div>
          </div>

          {/* PDF 2 */}
          <div className="bg-white rounded-xl shadow p-6 border">
            <div className="flex items-start gap-4">
              <FileText className="text-green-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">
                  Kharedi Khat Document
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Official land & legal document
                </p>

                <a
                  href={kharediKhatPDF}
                  download
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                >
                  <Download size={16} />
                  Download PDF
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
