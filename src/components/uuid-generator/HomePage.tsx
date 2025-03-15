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
      <div className="border border-white p-5">
        <h2 className="text-center text-3xl mb-3">UUID v4 and v7</h2>
        <p className="mb-5">
          UUIDs are fundamentally 128-bit values. These values are typically
          represented as a 36-character alphanumeric string following a specific
          format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx. This format consists of
          five hexadecimal strings separated by hyphens, often described as the
          8-4-4-4-12 format, referring to the number of hexadecimal digits in
          each segment. This consistent format is a critical aspect of UUID
          standardization, facilitating seamless interoperability across diverse
          systems and platforms. The uniformity in representation ensures that
          UUIDs generated in one system can be readily understood and utilized
          in another without ambiguity.
        </p>
        <div className="grid grid-cols-2 gap-5 ">
          <div>
            <h3 className="font-bold">What is UUID v4?</h3>
            <p>
              UUID version 4 is a 128-bit universally unique identifier that is
              generated randomly, meaning that each identifier is produced by
              selecting bits at random (or pseudo-randomly), which results in an
              extremely low probability of any two generated UUIDs being the
              same, making it ideal for situations where unique identifiers are
              needed without requiring a central coordination point.
            </p>
          </div>
          <div>
            <h3 className="font-bold">What is UUID v7?</h3>
            <p>
              UUID version 7 represents an advancement in universally unique
              identifiers by incorporating a time-based component into its
              structure, thereby enabling chronological ordering of generated
              IDs, which significantly enhances database performance by reducing
              index fragmentation and optimizing query efficiency, while still
              maintaining the essential characteristic of global uniqueness
              through the inclusion of random bits, making it particularly
              advantageous for applications dealing with time-sensitive data
              such as log files, audit trails, and time-series databases.
            </p>
          </div>
        </div>
        <div>
          Ref:{" "}
          <a
            className="underline"
            href="https://datatracker.ietf.org/doc/rfc9562/"
            target="_blank"
          >
            RFC-9562
          </a>
        </div>
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
