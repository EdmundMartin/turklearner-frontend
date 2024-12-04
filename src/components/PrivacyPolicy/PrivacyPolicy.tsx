
const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 text-gray-800">
            <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
            <p className="text-sm text-gray-600 text-center mb-8">Effective Date: 2024-12-4</p>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>Personal Information You Provide:</strong> When you use
                        TurkLearner.com, we may collect personal information such as your
                        name, email address, and other details you voluntarily provide
                        through contact forms, sign-ups, or other interactions.
                    </li>
                    <li>
                        <strong>Automatically Collected Information:</strong> We use Google
                        Analytics to collect certain information automatically, including:
                        <ul className="list-disc pl-6">
                            <li>IP address</li>
                            <li>Browser type</li>
                            <li>Device information</li>
                            <li>Pages viewed and time spent on the site</li>
                            <li>Referring and exit pages</li>
                            <li>Other usage data to understand trends and improve the website</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>To provide and improve the functionality of TurkLearner.com.</li>
                    <li>To analyze user activity and trends using Google Analytics to enhance our website.</li>
                    <li>To protect our website and detect security risks.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Cookies and Tracking Technologies</h2>
                <p>
                    Google Analytics uses cookies to collect and store user data. Cookies
                    are small files stored on your device that allow us to analyze site
                    usage. You can manage or disable cookies through your browser
                    settings.
                </p>
                <p>
                    For more information about how Google Analytics collects and
                    processes data, please visit{" "}
                    <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        Google’s Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://marketingplatform.google.com/about/analytics/terms/us/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        Google Analytics Terms of Service
                    </a>
                    .
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Third-Party Sharing</h2>
                <p>
                    We do not sell or rent your personal information. However, we may
                    share certain data with third-party service providers like Google
                    Analytics for analytics and site functionality purposes.
                </p>
                <p>
                    Google Analytics data is anonymized wherever possible and is used
                    strictly for analyzing website performance.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Your Choices and Rights</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>Opt-Out of Google Analytics:</strong> You can prevent Google
                        Analytics from collecting your data by installing the{" "}
                        <a
                            href="https://tools.google.com/dlpage/gaoptout"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            Google Analytics Opt-out Browser Add-on
                        </a>
                        .
                    </li>
                    <li>
                        <strong>Access, Update, or Delete Your Data:</strong> If you wish to
                        access, update, or delete your personal information, please contact
                        us via the contact form on our website.
                    </li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Data Security</h2>
                <p>
                    We use industry-standard security measures to protect your personal
                    data. However, no method of data transmission or storage is
                    completely secure. We cannot guarantee the absolute security of your
                    information.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Children’s Privacy</h2>
                <p>
                    TurkLearner.com is not intended for children under 13. We do not
                    knowingly collect personal information from children.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">Updates to This Privacy Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. Changes will be
                    reflected on this page, and the "Effective Date" will be updated.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                <p>
                    If you have any questions or concerns about this Privacy Policy,
                    please visit our website at{" "}
                    <a
                        href="https://turklearner.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        https://turklearner.com
                    </a>
                    .
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
