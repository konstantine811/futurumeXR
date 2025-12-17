import Preloader from "@/components/Preloader";
import Experience from "@/components/three-partials/experience";
import InitCanvas from "@/components/three-partials/init-canvas";
import { txtConfig } from "@/config/txt-config";
import { Suspense } from "react";

function XR() {
  return (
    <Suspense fallback={<Preloader text={txtConfig.title.toUpperCase()} />}>
      <InitCanvas>
        <Experience />
      </InitCanvas>
    </Suspense>
  );
}

export default XR;
