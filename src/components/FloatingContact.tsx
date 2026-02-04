import { Mail, MessageCircle } from "lucide-react";

const FloatingContact = () => {
    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
            <a
                href="mailto:contact@snssquare.com"
                className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                aria-label="Email Us"
            >
                <Mail size={24} />
            </a>
            <button
                className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative"
                aria-label="Chat with Us"
            >
                <MessageCircle size={28} />
            </button>
        </div>
    );
};

export default FloatingContact;
