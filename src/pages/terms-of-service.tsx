import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/common/layout/layout"
import Seo from "../components/common/seo/seo"
import AddressLink from "../components/common/address-link/address-link"
import { CONTACT_INFO } from "../constants/contacts.const"
import { ROUTES } from "../constants/routes.const"
import { SERVICE_AREA_LIST } from "../constants/service-areas.const"
import "../styles/legal-page.scss"

const seo = {
  title: "Terms of Service | Good Steward Cleaning",
  description:
    "Review the terms governing use of gsteward.com and commercial cleaning and facility maintenance services provided by Good Steward Cleaning.",
  pathname: "/terms-of-service/",
}

const TermsOfService = () => (
  <Layout>
    <article className="legal-page">
      <header className="legal-page__hero">
        <div className="legal-page__hero-content container">
          <div className="legal-page__eyebrow">Legal</div>
          <h1 className="legal-page__title title-xl">Terms of Service</h1>
          <p className="legal-page__updated">
            Effective Date: September 10, 2026
            <br />
            Last Updated: September 10, 2026
          </p>
        </div>
      </header>

      <div className="legal-page__content container">
        <section>
          <h2>1. Agreement to These Terms</h2>
          <p>
            These Terms of Service (the &quot;Terms&quot;) govern your use of
            gsteward.com (the &quot;Site&quot;) and the cleaning and facility
            maintenance services provided by Good Steward Cleaning
            (&quot;Good Steward Cleaning,&quot; &quot;we,&quot; &quot;us,&quot;
            or &quot;our&quot;). By using the Site, requesting a quote, or
            accepting our services, you agree to these Terms. If you do not
            agree, please do not use the Site or our services.
          </p>
          <p>
            If you and Good Steward Cleaning have signed a separate written
            service agreement, that agreement controls wherever it conflicts
            with these Terms.
          </p>
        </section>

        <section>
          <h2>2. Services and Scope of Work</h2>
          <p>
            Good Steward Cleaning provides commercial cleaning and facility
            maintenance services to offices, medical suites, schools, gyms,
            retail spaces, and similar commercial properties in San Diego
            County and North County, California. The services we offer are
            described on our <Link to={ROUTES.janitorial}>Janitorial</Link> and{" "}
            <Link to={ROUTES.maintenance}>Maintenance</Link> pages and on the
            individual service pages of the Site.
          </p>
          <p>
            Website descriptions are general. The exact scope of work for your
            property — the tasks included, the areas covered, and the frequency
            — is set out in the written quote, proposal, or service schedule we
            provide to you. Work that is not listed in that document is not
            included in the price and will be quoted separately.
          </p>
        </section>

        <section>
          <h2>3. Quotes and Pricing</h2>
          <p>
            Any price we give before we have seen your property is preliminary.
            Final pricing is confirmed after an on-site walkthrough, and it
            reflects the size and condition of the space, the scope of work,
            and the service frequency.
          </p>
          <p>
            Quotes are valid for 30 days from the date issued unless stated
            otherwise. If the condition or use of the property changes
            materially after the walkthrough, we may adjust the quote before
            work begins.
          </p>
        </section>

        <section>
          <h2>4. Scheduling, Rescheduling, and Cancellation</h2>
          <p>
            We agree service dates and times with you in advance and make
            reasonable efforts to keep to that schedule.
          </p>
          <ul>
            <li>
              <strong>Rescheduling of services by you.</strong> Please give us
              at least 24 hours notice.
            </li>
            <li>
              <strong>Lock-outs.</strong> If our team arrives at the agreed time
              and cannot access the property, we will treat the visit as a late
              cancellation.
            </li>
            <li>
              <strong>Cancellation or rescheduling by us.</strong> If we need
              to change a scheduled visit, we will notify you as soon as
              possible and offer the earliest available alternative.
            </li>
            <li>
              <strong>Ending recurring service.</strong> Either party may end a
              recurring service agreement with 30 days written notice.
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Payment Terms</h2>
          <ul>
            <li>
              Accepted payment methods: Credit and Debit cards, checks, cash,
              and Zelle.
            </li>
            <li>Invoices are due within 14 days of receipt.</li>
            <li>
              We may suspend service on accounts that remain unpaid beyond 30
              days past due, after notifying you.
            </li>
            <li>
              Prices for recurring services may be adjusted with at least the
              same day written notice.
            </li>
            <li>Quoted prices do not include applicable taxes unless stated.</li>
          </ul>
        </section>

        <section>
          <h2>6. Property Access</h2>
          <p>
            You are responsible for giving our team safe and timely access to
            the property at the agreed times. If you provide us with keys,
            access cards, door codes, or alarm codes, we will keep them secure,
            limit them to the staff assigned to your property, and return them
            at the end of the engagement. Please tell us in advance about alarm
            procedures, restricted areas, and any building rules — including
            loading dock access, parking, and after-hours entry — so our team
            can follow them.
          </p>
        </section>

        <section>
          <h2>7. Client Responsibilities and Safety</h2>
          <p>To let us do the work safely and well, please:</p>
          <ul>
            <li>
              provide access to the property at the agreed time, along with any
              required access credentials;
            </li>
            <li>
              secure or remove cash, jewelry, sensitive documents, and
              irreplaceable or high-value items before service;
            </li>
            <li>
              tell us in advance about fragile, antique, or specially finished
              surfaces and items that require particular care or specific
              products;
            </li>
            <li>
              tell us about known hazards at the property — mold, pest
              infestation, biohazards, exposed wiring, damaged flooring, leaks,
              or recent construction dust;
            </li>
            <li>
              ensure that utilities, including water and electricity, are
              available during service;
            </li>
            <li>
              keep pets and unattended children away from areas being cleaned.
            </li>
          </ul>
          <p>
            We may decline or stop work at a property where conditions are
            unsafe for our staff, and we will discuss the situation with you
            before charging for a visit affected in this way.
          </p>
        </section>

        <section>
          <h2>8. Our Staff</h2>
          <p>
            All work is performed by Good Steward Cleaning’s own in-house
            staff. We do not subcontract our cleaning work to third-party
            crews.
          </p>
        </section>

        <section>
          <h2>9. Insurance</h2>
          <p>
            Good Steward Cleaning maintains commercial general liability
            insurance. This coverage is kept in force for the duration of each
            client engagement.
          </p>
          <p>
            A current certificate of insurance is available to clients and
            prospective clients on request. Contact us at{" "}
            <a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phoneLocal}</a> or{" "}
            <a href={CONTACT_INFO.privacyEmailHref}>
              {CONTACT_INFO.privacyEmail}
            </a>{" "}
            and we will arrange for our carrier to issue it.
          </p>
        </section>

        <section>
          <h2>10. Damage and Quality Claims</h2>
          <p>
            If something is damaged during our service, or the work does not
            meet the agreed scope, please tell us within 48 hours of the service
            visit so we can investigate while the evidence is fresh. Send your
            report to{" "}
            <a href={CONTACT_INFO.privacyEmailHref}>
              {CONTACT_INFO.privacyEmail}
            </a>{" "}
            or call{" "}
            <a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phoneLocal}</a>, and
            include photographs and a description of the issue and its
            location.
          </p>
          <p>
            We will investigate promptly and, where we are responsible, repair
            or replace the item or arrange for its repair, or refund the portion
            of the service in question, at our reasonable discretion. Claims
            reported after the period above may be difficult to verify and may
            not be accepted.
          </p>
          <p>
            We are not responsible for pre-existing damage, ordinary wear and
            tear, damage caused by the age or condition of an item or surface,
            or damage to items that were not disclosed to us as fragile or
            specially finished under Section 7.
          </p>
        </section>

        <section>
          <h2>11. Service Guarantee</h2>
          <p>
            We stand behind the work our team performs. If an area we serviced
            does not meet the standard set out in your service schedule, tell
            us within 48 hours of the visit and we will return and re-clean that
            area at no additional charge.
          </p>
          <p>
            <strong>What the guarantee covers.</strong> The guarantee applies
            to the tasks and areas included in the written quote, proposal, or
            service schedule for your property. The re-clean covers the
            specific area you identify — not the entire property — and is
            performed to the same scope as the original visit.
          </p>
          <p>
            <strong>What it does not cover.</strong>
          </p>
          <ul>
            <li>work that was not part of the agreed scope for that visit;</li>
            <li>
              results limited by the age, material, or prior condition of a
              surface, as described in Section 13 — not every stain, mark, odor,
              or build-up can be removed by cleaning;
            </li>
            <li>
              areas that have been used, occupied, cleaned by others, or
              altered since our visit, where the original condition can no
              longer be verified;
            </li>
            <li>
              damage to property, which is handled under Section 10 (Damage and
              Quality Claims) rather than under this section.
            </li>
          </ul>
        </section>

        <section>
          <h2>12. Intellectual Property</h2>
          <p>
            The content of the Site — text, images, photographs, graphics, page
            layouts, and the Good Steward Cleaning name and logo — belongs to
            Good Steward Cleaning or its licensors and is protected by
            copyright and trademark law. You may view and print pages of the
            Site for your own use in evaluating or purchasing our services. You
            may not copy, republish, scrape, or use our content for another
            business, or use our name or logo, without our prior written
            permission.
          </p>
        </section>

        <section>
          <h2>13. Warranties</h2>
          <p>
            We perform our services with reasonable care and skill. Except as
            expressly stated in these Terms or in a written agreement with you,
            the Site and our services are provided &quot;as is&quot; and we
            disclaim all other warranties, express or implied, including
            implied warranties of merchantability, fitness for a particular
            purpose, and non-infringement. We do not warrant that the Site will
            be uninterrupted or error-free, or that the information on it is
            complete or current.
          </p>
          <p>
            Cleaning results depend in part on the age, material, and prior
            condition of the surfaces involved. We do not guarantee that every
            stain, mark, odor, or build-up can be removed.
          </p>
        </section>

        <section>
          <h2>14. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by California law, Good Steward
            Cleaning is not liable for indirect, incidental, special,
            consequential, or punitive damages, or for lost profits, lost
            business, or business interruption, arising out of or related to
            the Site or our services, even if we have been advised of the
            possibility of such damages.
          </p>
          <p>
            Nothing in these Terms limits liability that cannot be limited
            under applicable law, including liability for gross negligence,
            willful misconduct, or personal injury caused by our negligence.
          </p>
        </section>

        <section>
          <h2>15. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Good Steward Cleaning and
            its owners, officers, and employees from third-party claims,
            damages, and reasonable attorneys’ fees arising from your breach of
            these Terms, your violation of law, or unsafe or undisclosed
            conditions at your property, except to the extent the claim arises
            from our own negligence or willful misconduct.
          </p>
        </section>

        <section>
          <h2>16. Force Majeure</h2>
          <p>
            Neither party is liable for delay or failure to perform caused by
            events beyond its reasonable control, including natural disasters,
            wildfires, floods, earthquakes, power or water outages, public
            health orders, government action, labor disruptions, or building
            closures. We will notify you as soon as practicable and reschedule
            affected services.
          </p>
        </section>

        <section>
          <h2>17. Governing Law and Venue</h2>
          <p>
            These Terms and any dispute arising out of them or out of our
            services are governed by the laws of the State of California,
            without regard to its conflict of laws rules. The parties agree
            that the state and federal courts located in San Diego County,
            California have exclusive jurisdiction, and each party consents to
            venue there.
          </p>
        </section>

        <section>
          <h2>18. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. The current version is
            always posted on this page with the &quot;Last Updated&quot; date at
            the top. Changes apply to services requested after the updated
            Terms are posted. For clients under a recurring service agreement,
            we will give notice of material changes before they take effect.
          </p>
        </section>

        <section>
          <h2>19. General Provisions</h2>
          <p>
            If any provision of these Terms is found unenforceable, the rest
            remains in effect. Our failure to enforce a provision is not a
            waiver of it. You may not assign your rights or obligations under
            these Terms without our written consent. These Terms, together with
            any written quote, proposal, or service agreement, are the entire
            agreement between you and Good Steward Cleaning regarding our
            services.
          </p>
        </section>

        <section className="legal-page__contact">
          <h2>Contact Us</h2>
          <address>
            <strong>Good Steward Cleaning</strong>
            {SERVICE_AREA_LIST.map(serviceArea => (
              <AddressLink
                key={serviceArea.city}
                address={serviceArea.officeAddress}
                googleMapsUrl={serviceArea.googleMapsUrl}
              />
            ))}
            <a href={CONTACT_INFO.phoneHref}>
              Phone: {CONTACT_INFO.phoneLocal}
            </a>
            <a href={CONTACT_INFO.privacyEmailHref}>
              Email: {CONTACT_INFO.privacyEmail}
            </a>
            <span>Hours: {CONTACT_INFO.legalHours}</span>
          </address>
        </section>
      </div>
    </article>
  </Layout>
)

export const Head = () => <Seo {...seo} />

export default TermsOfService
