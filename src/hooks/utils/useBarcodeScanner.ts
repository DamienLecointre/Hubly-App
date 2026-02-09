import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

export function useBarcodeScanner(elementId: string) {
  const [scannedCode, setScannedCode] = useState<string | null>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const scannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    let isMounted = true;
    const scanner = new Html5Qrcode(elementId);
    scannerRef.current = scanner;

    const start = async () => {
      try {
        await new Promise((r) => setTimeout(r, 100));

        if (!isMounted) return;

        await scanner.start(
          { facingMode: "environment" },
          { fps: 10, qrbox: { width: 250, height: 150 } },
          (text) => setScannedCode(text),
          () => {},
        );

        if (isMounted) setIsCameraReady(true);
      } catch (err) {
        console.error("Erreur Scanner:", err);
      }
    };

    start();

    return () => {
      isMounted = false;
      if (scannerRef.current?.isScanning) {
        scannerRef.current.stop().catch(console.error);
      }
    };
  }, [elementId]);

  const reset = () => setScannedCode(null);

  return { scannedCode, isCameraReady, reset };
}
