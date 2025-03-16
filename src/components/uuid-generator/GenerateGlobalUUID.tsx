import { useEffect, useState } from "react";
import init, { uuid_generate } from "rust-utility-tools";

export const UUID_VERSION = {
  v4: "V4",
  v7: "V7",
};

interface Props {
  onClickCopy?: (value: string) => void;
  onUuidVersionChange?: (version: string) => void;
}

const copyToClipboard = async (text: string) => {
  let isSuccess = false;
  try {
    await navigator.clipboard.writeText(text);
    isSuccess = true;
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    isSuccess = true;
  }
  return isSuccess;
};

const GenerateGlobalUUID = ({ onClickCopy, onUuidVersionChange }: Props) => {
  const [globalUUID, setGlobalUUID] = useState("");
  const [uuidVersion, setUuidVersion] = useState("V4");
  const [generateTime, setGenerateTime] = useState<Date | null>(null);

  const generateGlobalUUID = () => {
    const now = new Date();
    setGlobalUUID(uuid_generate(uuidVersion, now));
    setGenerateTime(now);
  };

  useEffect(() => {
    init().then(() => {
      generateGlobalUUID();
    });
  }, []);

  return (
    <div className="w-full border border-white p-5 mb-10">
      <div className="text-2xl sm:text-5xl text-center py-10">
        {globalUUID != "" ? globalUUID : "Generating..."}
      </div>
      {uuidVersion == UUID_VERSION.v7 && generateTime && (
        <div className="mt-2 text-center text-sm">
          Timestamp (Milliseconds): {generateTime.getTime()}
        </div>
      )}
      <div className="flex flex-row justify-center gap-3 mt-5">
        <div className="border boder-white w-fit">
          <select
            className="outline-none px-2"
            name="select"
            onChange={(e) => {
              setUuidVersion(e.target.value);
              if (onUuidVersionChange) onUuidVersionChange(e.target.value);
            }}
          >
            {Object.values(UUID_VERSION).map((item) => {
              return (
                <option value={item} selected={uuidVersion === item}>
                  Version: {item.toLowerCase()}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <button
            className="cursor-pointer border border-white rounded-full px-4"
            onClick={generateGlobalUUID}
          >
            Refresh
          </button>
        </div>
        <div>
          <button
            className="cursor-pointer border border-white rounded-full px-4 active:bg-green-200 transition-all duration-300 ease-in-out"
            onClick={async () => {
              const success = await copyToClipboard(globalUUID);
              if (success && onClickCopy) onClickCopy(globalUUID);
            }}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateGlobalUUID;
