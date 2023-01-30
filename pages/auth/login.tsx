import React from "react";
import { BasePage, LoadingIcon } from "@components";
import { useCodeRequest, useCodeValidate } from "@data";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();

  const [step, setStep] = React.useState(true);
  const [email, setEmail] = React.useState("admin@testman.com");
  const [code, setCode] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const { codeRequest } = useCodeRequest();
  const { codeValidate } = useCodeValidate();

  const request = async () => {
    try {
      setLoading(true);
      const user = await codeRequest(email);
      if (user) {
        setLoading(false);
        // Move the user to step two
        setError(false);
        setStep(false);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  const submit = async () => {
    try {
      setLoading(true);
      const user = await codeValidate(email, code);
      if (user) {
        // Redirect user to user account
        await router.push("/");
        setLoading(false);
      }
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <BasePage title="Login">
      <h1 className="text-center text-3xl p-5">Login</h1>
      <div className="mx-auto w-96">
        <form>
          {step
            ? stepOne({ email, setEmail, loading, error, request })
            : stepTwo({
                code,
                setCode,
                setStep,
                setError,
                loading,
                error,
                submit,
              })}
        </form>
      </div>
    </BasePage>
  );
}

function stepOne({
  email,
  setEmail,
  loading,
  error,
  request,
}: {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  error: boolean;
  request: () => Promise<void>;
}) {
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {error ? (
          <p className="text-red-500 text-xs italic">
            Please enter a valid email
          </p>
        ) : null}
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          onClick={() => request()}
          disabled={loading}
        >
          {loading ? (
            <LoadingIcon className="w-6 h-full text-gray-200 animate-spin dark:text-gray-600 fill-indigo-600" />
          ) : (
            "Next"
          )}
        </button>
      </div>
    </>
  );
}

function stepTwo({
  code,
  setCode,
  setStep,
  setError,
  loading,
  error,
  submit,
}: {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  error: boolean;
  submit: () => Promise<void>;
}) {
  return (
    <>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm mb-4" htmlFor="text">
          Please check your email for a passcode. Remember to check your spam
          folder.
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="text"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        {error ? (
          <p className="text-red-500 text-xs italic">
            Please enter a valid code. Codes expire in 10 minutes from the time
            they were requested. If it has been more than 10 minutes, please use
            the Back button and try again.
          </p>
        ) : null}
      </div>
      <div className="flex justify-between">
        {loading ? null : (
          <button
            type="button"
            className="rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            onClick={() => {
              setError(false);
              setStep(true);
              setCode("");
            }}
            disabled={loading}
          >
            Back
          </button>
        )}
        <button
          type="button"
          className="rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          onClick={() => submit()}
          disabled={loading}
        >
          {loading ? (
            <LoadingIcon className="w-6 h-full text-gray-200 animate-spin dark:text-gray-600 fill-indigo-600" />
          ) : (
            "Login"
          )}
        </button>
      </div>
    </>
  );
}
