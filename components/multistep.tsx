import { FormEvent, Fragment, useState } from "react";

type FormData = {
    name?: string;
    email?: string;
    phone?: string;
};

type StepOneProps = {
    onNext: (data: FormData) => void;
};

const StepOne = ({ onNext }: StepOneProps) => {
    const [name, setName] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNext({ name });
    };

    return (
        <Fragment>
            <div className="flex justify-center">
                <ol
                    className="flex items-center gap-2 text-xs font-medium text-gray-500 sm:gap-4"
                >
                    <li className="flex items-center justify-center gap-2 text-blue-600">
                        <span
                            className="h-6 w-6 rounded bg-blue-50 text-center text-[10px] font-bold leading-6"
                        >
                            1
                        </span>

                        <span> Name </span>
                    </li>

                </ol>
            </div>
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border bg-onyx border-obsidian-300 px-4 rounded-[10px] h-8"
                    />
                </label>
                <button type="submit">Next</button>
            </form>
        </Fragment>
    );
};

type StepTwoProps = {
    onPrev: () => void;
    onNext: (data: FormData) => void;
    name?: string;
};

const StepTwo = ({ onPrev, onNext, name }: StepTwoProps) => {
    const [email, setEmail] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNext({ email });
    };

    return (
        <Fragment>
            <div className="flex justify-center">
                <ol
                    className="flex items-center gap-2 text-xs font-medium text-gray-500 sm:gap-4"
                >
                    <li className="flex">
                        <span className="rounded bg-green-50 p-1.5 text-green-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-3 h-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </li>

                    <li className="flex items-center justify-center gap-2 text-blue-600">
                        <span
                            className="h-6 w-6 rounded bg-blue-50 text-center text-[10px] font-bold leading-6"
                        >
                            2
                        </span>

                        <span> Email </span>
                    </li>

                </ol>
            </div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <p>Name: {name}</p>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border bg-onyx border-obsidian-300 px-4 rounded-[10px] h-8"
                    />
                </label>
                <button type="button" onClick={onPrev}>
                    Back
                </button>
                <button type="submit">Next</button>
            </form>
        </Fragment>
    );
};

type StepThreeProps = {
    onPrev: () => void;
    onSubmit: (data: FormData) => void;
    name?: string;
    email?: string;
};

const StepThree = ({ onPrev, onSubmit, name, email }: StepThreeProps) => {
    const [phone, setPhone] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({ phone });
    };

    return (
        <Fragment>
            <div className="flex justify-center">
                <ol
                    className="flex items-center gap-2 text-xs font-medium text-gray-500 sm:gap-4"
                >
                    <li className="flex">
                        <span className="rounded bg-green-50 p-1.5 text-green-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-3 h-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </li>

                    <li className="flex">
                        <span className="rounded bg-green-50 p-1.5 text-green-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-3 h-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                    </li>

                    <li className="flex items-center justify-center gap-2 text-blue-600">
                        <span
                            className="h-6 w-6 rounded bg-blue-50 text-center text-[10px] font-bold leading-6"
                        >
                            3
                        </span>

                        <span> Email </span>
                    </li>
                </ol>
            </div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <label>
                    Phone:
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="border bg-onyx border-obsidian-300 px-4 rounded-[10px] h-8"
                    />
                </label>
                <button type="button" onClick={onPrev}>
                    Back
                </button>
                <button type="submit">Submit</button>
            </form>
        </Fragment>
    );
};

const MultiStepDemo = () => {
    const [formData, setFormData] = useState<FormData>({});
    const [step, setStep] = useState<number>(1);

    const handleNext = (data: FormData) => {
        setFormData({ ...formData, ...data });
        setStep(step + 1);
    };

    const handlePrev = () => {
        setStep(step - 1);
    };

    const handleSubmit = (data: FormData) => {
        setFormData({ ...formData, ...data });
        setStep(step + 1);
    };

    return (
        <div className="max-w-lg border h-96">
            {step === 1 && <StepOne onNext={handleNext} />}
            {step === 2 && <StepTwo onPrev={handlePrev} onNext={handleNext} name={formData.name} />}
            {step === 3 && <StepThree onPrev={handlePrev} onSubmit={handleSubmit} name={formData.name} email={formData.email} />}
            {step === 4 && (
                <p>
                    Thank you, {formData.name}! Your email address is {formData.email} and your phone number is {formData.phone}.
                </p>
            )}
        </div>
    );
};


export default MultiStepDemo