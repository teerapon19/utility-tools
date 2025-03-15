import { useState } from "react";
import GenerateGlobalUUID from "./GenerateGlobalUUID";
import Toast from "./Toast";

const HomePage = () => {
  const [showCopyToast, setShowCopyToast] = useState(false);
  return (
    <main className="px-15 pt-5">
      <h1 className="text-5xl mb-10 font-bold">
        Online UUID Generator (v4, v7)
      </h1>
      <GenerateGlobalUUID onClickCopy={() => setShowCopyToast(true)} />
      <div className="grid grid-cols-2 gap-5">
        <div></div>
      </div>
      <Toast
        show={showCopyToast}
        setShow={setShowCopyToast}
        message="🎉 UUID copied to clipboard"
      />
    </main>
  );
};

export default HomePage;
