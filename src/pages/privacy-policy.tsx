import * as React from "react"
import Layout from "../components/common/layout/layout"
import Seo from "../components/common/seo/seo"
import AddressLink from "../components/common/address-link/address-link"
import { CONTACT_INFO } from "../constants/contacts.const"
import { SERVICE_AREA_LIST } from "../constants/service-areas.const"
import "../styles/legal-page.scss"

const seo = {
  title: "Privacy Policy | Good Steward Cleaning",
  description:
    "Learn how Good Steward Cleaning collects, uses, protects, and shares personal information when you use gsteward.com or contact us about our services.",
  pathname: "/privacy-policy/",
}

const PrivacyPolicy = () => (
  <Layout>
    <article className="legal-page">
      <header className="legal-page__hero">
        <div className="legal-page__hero-content container">
          <div className="legal-page__eyebrow">Legal</div>
          <h1 className="legal-page__title title-xl">Privacy Policy</h1>
          <p className="legal-page__updated">
            Effective Date: September 10, 2026<br />
            Last Updated: September 10, 2026
          </p>
        </div>
      </header>

      <div className="legal-page__content container">
        <section>
          <p>
            Good Steward Cleaning (&quot;Good Steward Cleaning,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the
            website gsteward.com (the &quot;Site&quot;) and provides commercial
            cleaning and facility maintenance services. We are based in San
            Diego, California.
          </p>
          <p>Our offices are located at:</p>
          <ul>
            {SERVICE_AREA_LIST.map(serviceArea => (
              <li key={serviceArea.city}>
                <AddressLink
                  address={serviceArea.officeAddress}
                  googleMapsUrl={serviceArea.googleMapsUrl}
                />
              </li>
            ))}
          </ul>
          <p>
            This Privacy Policy explains what personal information we collect
            through the Site, how we use it, who we share it with, and the
            choices you have. It applies to the Site and to information we
            receive when you contact us about our services.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <h3>Information you provide to us</h3>
          <p>
            When you submit a form on the Site, call us, or email us, we collect
            the information you choose to give us. This typically includes:
          </p>
          <ul>
            <li>your name;</li>
            <li>your email address;</li>
            <li>your phone number;</li>
            <li>the name of your company or facility;</li>
            <li>
              the subject of your inquiry and the details you include in your
              message — for example, the type of property, its approximate
              size, your location, and the services you are interested in.
            </li>
          </ul>

          <h3>Information we collect automatically</h3>
          <p>
            When you visit the Site, we and our analytics providers collect
            certain technical information through cookies and similar
            technologies, including:
          </p>
          <ul>
            <li>your IP address;</li>
            <li>your browser type and version;</li>
            <li>your device type and operating system;</li>
            <li>
              the pages you view, the links you click, and the time you spend
              on each page;
            </li>
            <li>
              the website, search engine, or advertisement that referred you
              to the Site.
            </li>
          </ul>

          <h3>Information we do not want</h3>
          <p>
            We do not need — and ask that you do not send us through the Site —
            Social Security numbers, driver’s license numbers, payment card
            numbers, bank account details, or health information. If you send
            us information of this kind through a web form, we will delete it
            once we have addressed your inquiry.
          </p>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>We use the information described above to:</p>
          <ul>
            <li>
              respond to quote requests, contact form submissions, calls, and
              emails;
            </li>
            <li>prepare estimates and arrange on-site walkthroughs;</li>
            <li>
              schedule, perform, and manage the cleaning and maintenance
              services you request;
            </li>
            <li>
              communicate with you about work in progress — scheduling,
              building access, and follow-up;
            </li>
            <li>maintain our business records, invoices, and accounts;</li>
            <li>
              measure how the Site performs and improve our website and
              marketing;
            </li>
            <li>comply with applicable law and enforce our agreements.</li>
          </ul>
          <p>
            We send promotional messages only to people who have asked to
            receive them, and every promotional email includes a way to
            unsubscribe. Messages about a service you have already requested —
            scheduling confirmations, invoices, and similar — are not
            promotional and are sent as part of providing the service.
          </p>
          <p>
            We do not sell your personal information, and we do not share it
            for cross-context behavioral advertising.
          </p>
        </section>

        <section>
          <h2>When We Disclose Personal Information</h2>
          <p>
            We disclose personal information only to the following categories
            of recipients:
          </p>
          <ul>
            <li>
              <strong>Service providers.</strong> Companies that help us run
              the Site and our business — website hosting, form and email
              delivery, analytics (Google Analytics and Google Tag Manager),
              and similar vendors. They process information on our behalf and
              are not permitted to use it for their own purposes.
            </li>
            <li>
              <strong>Professional advisors.</strong> Our accountants,
              insurers, and attorneys, where reasonably necessary.
            </li>
            <li>
              <strong>Legal and safety.</strong> Where required by law,
              subpoena, or court order, or where we believe in good faith that
              disclosure is necessary to protect our rights or property or the
              safety of any person.
            </li>
            <li>
              <strong>Business transfers.</strong> If our business is sold,
              merged, or reorganized, customer information may be transferred
              as part of that transaction. We will require the recipient to
              honor this Privacy Policy.
            </li>
          </ul>
        </section>

        <section>
          <h2>Cookies and Analytics</h2>
          <p>
            The Site uses cookies and similar technologies, delivered through
            Google Tag Manager and Google Analytics, to understand how visitors
            find and use the Site. These tools record usage data such as pages
            viewed, session length, and referral source.
          </p>
          <p>
            You can block or delete cookies through your browser settings. If
            you do, some parts of the Site may not work as intended. You can
            also opt out of Google Analytics across all websites using the
            browser add-on at{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              tools.google.com/dlpage/gaoptout
            </a>
            .
          </p>
          <h3>Do Not Track</h3>
          <p>
            Some browsers can send a &quot;Do Not Track&quot; (DNT) signal.
            There is no common industry standard for how websites should
            respond to these signals, and our Site does not currently respond
            to them.
          </p>
        </section>

        <section>
          <h2>Your Privacy Choices</h2>
          <p>You may ask us to:</p>
          <ul>
            <li>tell you what personal information we hold about you;</li>
            <li>correct information that is inaccurate or out of date;</li>
            <li>
              delete information we no longer need for business, accounting,
              or legal reasons;
            </li>
            <li>stop contacting you.</li>
          </ul>
          <p>
            To make a request, email us at{" "}
            <a href={CONTACT_INFO.privacyEmailHref}>
              {CONTACT_INFO.privacyEmail}
            </a>{" "}
            or call <a href={CONTACT_INFO.phoneHref}>(858) 379-7770</a>. We
            will respond within a reasonable time and may ask you for
            information that allows us to verify your identity before we act on
            the request. We will not discriminate against you for exercising
            any of these choices.
          </p>
          <h3>California privacy rights</h3>
          <p>
            If you are a California resident and believe you have additional
            rights under California privacy law, contact us at the address
            above and we will work with you in good faith to address your
            request.
          </p>
        </section>

        <section>
          <h2>Data Retention</h2>
          <p>
            We keep inquiry and quote information for as long as we are in
            contact with you about the request, and we keep records related to
            services we performed for as long as required for accounting, tax,
            insurance, and legal purposes. Analytics data is retained according
            to the retention settings of our analytics provider.
          </p>
        </section>

        <section>
          <h2>Security</h2>
          <p>
            We use reasonable administrative, technical, and physical
            safeguards designed to protect the personal information we hold
            against loss, misuse, and unauthorized access. No method of
            transmitting or storing information over the Internet is
            completely secure, however, and we cannot guarantee absolute
            security.
          </p>
        </section>

        <section>
          <h2>Children’s Privacy</h2>
          <p>
            The Site and our services are directed to businesses, property
            managers, and facility operators — not to children. We do not
            knowingly collect personal information from anyone under 13 years
            of age. If you believe a child has provided us with personal
            information, contact us at{" "}
            <a href={CONTACT_INFO.privacyEmailHref}>
              {CONTACT_INFO.privacyEmail}
            </a>{" "}
            and we will delete it.
          </p>
        </section>

        <section>
          <h2>Links to Other Websites</h2>
          <p>
            The Site may link to websites we do not operate, such as our Google
            Business Profile or social media pages. This Privacy Policy does
            not apply to those websites, and we are not responsible for their
            content or privacy practices. We encourage you to read the privacy
            policy of any website you visit.
          </p>
        </section>

        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we
            will post the revised policy on this page and update the Effective
            Date at the top. If we make material changes to how we handle
            personal information, we will post a notice on the homepage of the
            Site for at least 30 days before the changes take effect.
          </p>
        </section>

        <section className="legal-page__contact">
          <h2>Contact Us</h2>
          <p>Questions about this Privacy Policy or about the information we hold:</p>
          <address>
            <strong>Good Steward Cleaning</strong>
            {SERVICE_AREA_LIST.map(serviceArea => (
              <AddressLink
                key={serviceArea.city}
                address={serviceArea.officeAddress}
                googleMapsUrl={serviceArea.googleMapsUrl}
              />
            ))}
            <a href={CONTACT_INFO.phoneHref}>Phone: (858) 379-7770</a>
            <a href={CONTACT_INFO.privacyEmailHref}>
              Email: {CONTACT_INFO.privacyEmail}
            </a>
            <span>Hours: Monday–Friday, 9:00 AM – 6:00 PM PT</span>
          </address>
        </section>
      </div>
    </article>
  </Layout>
)

export const Head = () => <Seo {...seo} />

export default PrivacyPolicy
