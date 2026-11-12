import * as React from "react"
import { Link } from "gatsby"
import Seo from "../../components/common/seo/seo"
import StructuredData from "../../components/common/structured-data/structured-data"
import BlogArticle from "../../components/templates/blog-article/blog-article"
import { CONTACT_INFO } from "../../constants/contacts.const"
import { ROUTES } from "../../constants/routes.const"
import {
  COMMERCIAL_CLEANING_CHECKLIST_ARTICLE,
  COMMERCIAL_CLEANING_CHECKLIST_FAQ,
} from "../../data/blog.data"
import { createBlogArticleSchema } from "../../utils/blog-schema"

const article = COMMERCIAL_CLEANING_CHECKLIST_ARTICLE

const breadcrumbs = [
  { label: "Home", path: ROUTES.home },
  { label: "Blog", path: ROUTES.blog.index },
  { label: "Commercial Cleaning Checklist" },
]

const CommercialCleaningChecklistPage = () => (
  <BlogArticle article={article} breadcrumbs={breadcrumbs}>
    <p className="blog-article__quick-answer">
      <strong>Quick answer:</strong> A standard commercial cleaning service
      includes trash removal, dusting, vacuuming and mopping, restroom cleaning
      and disinfection, and break room cleaning. Deep cleaning, carpet
      extraction, floor stripping and waxing, and window cleaning are usually
      scheduled separately. The exact scope is defined in your service
      agreement.
    </p>

    <p>
      Commercial cleaning is so much more than emptying trash cans and vacuuming
      the floors. From cleaning client-facing spaces to sanitizing restrooms,
      these tasks keep facilities clean, comfortable, and ready to use.
    </p>

    <p>
      <strong>But what tasks does commercial cleaning include?</strong>
    </p>

    <p>
      This depends on the facility type, cleaning frequency, and the specific
      services included in the agreement. This checklist shows San Diego and
      North County businesses which commercial cleaning services to look for and
      which ones are usually requested separately.
    </p>

    <h2>1. Routine Commercial Cleaning Checklist</h2>
    <p>
      Routine commercial cleaning is what keeps your facility clean and
      presentable day to day. Shared spaces, break rooms, restrooms, and
      kitchens all need regular maintenance. The specific cleaning tasks will
      vary based on your facility and service agreement,{" "}
      <strong>
        but this checklist covers some of the most common responsibilities you
        can discuss with potential providers.
      </strong>
    </p>

    <h3>General Areas and Shared Spaces</h3>
    <ul>
      <li>Empty trash bins and replace liners as needed.</li>
      <li>Dust accessible surfaces, ledges, and furniture.</li>
      <li>Wipe down work surfaces.</li>
      <li>Clean reception areas and common spaces.</li>
      <li>Spot-clean visible marks on doors, walls, and glass.</li>
      <li>Clean high-touch surfaces in shared areas.</li>
    </ul>

    <figure className="blog-article__figure">
      <img
        className="blog-article__image"
        src="/images/blog/cleaner-glass-table-office-lounge.webp"
        alt="Good Steward cleaner wiping a glass table in an office lounge"
        width={1600}
        height={1066}
        loading="lazy"
      />
    </figure>

    <h3>Floors and Carpets</h3>
    <ul>
      <li>Vacuum carpeted areas.</li>
      <li>Sweep or dust-mop hard floors.</li>
      <li>Damp-mop hard floors.</li>
      <li>Spot-clean visible spills or marks.</li>
      <li>Clean entry mats and remove tracked-in dirt.</li>
    </ul>

    <p>
      It’s important to note that vacuuming and mopping are routine services,
      while carpet extraction and hard-floor maintenance are typically
      considered specialized services.
    </p>

    <figure className="blog-article__figure">
      <img
        className="blog-article__image"
        src="/images/blog/cleaner-vacuuming-carpeted-hallway.webp"
        alt="Good Steward cleaner vacuuming a carpeted hallway with a backpack vacuum"
        width={1365}
        height={2048}
        loading="lazy"
      />
    </figure>

    <h3>Restrooms</h3>
    <ul>
      <li>Clean and disinfect toilets and urinals.</li>
      <li>Clean sinks, faucets, and counters.</li>
      <li>Clean mirrors.</li>
      <li>Wipe appropriate high-touch surfaces.</li>
      <li>Clean restroom floors.</li>
      <li>Empty trash and sanitary waste bins.</li>
      <li>Refill soap, toilet paper, and paper towels.</li>
    </ul>

    <p>
      Make sure to clarify with your provider who will supply restroom
      consumables and whether restocking is included in their services.
    </p>

    <h3>Kitchens and Break Rooms</h3>
    <ul>
      <li>Wipe down counters and tables.</li>
      <li>Clean sinks and faucets.</li>
      <li>Wipe down exterior appliance surfaces.</li>
      <li>Empty trash and recycling bins.</li>
      <li>Sweep and mop floors.</li>
      <li>Clean shared dining surfaces.</li>
    </ul>

    <p>
      More intensive tasks such as washing dishes or cleaning inside
      refrigerators and microwaves may need to be requested separately with your
      cleaning company.
    </p>

    <figure className="blog-article__figure">
      <img
        className="blog-article__image"
        src="/images/blog/cleaner-break-room-counter.webp"
        alt="Good Steward cleaner wiping a break room counter"
        width={1600}
        height={1066}
        loading="lazy"
      />
    </figure>

    <h2>2. Periodic and Specialized Commercial Cleaning Tasks</h2>
    <p>
      Routine cleaning maintains a facility day to day. It covers visible,
      high-use surfaces: trash, common areas, and floors. However, some tasks
      require specialized equipment, additional time, or less frequent
      scheduling. These tasks are often handled outside of the regular cleaning
      schedule. Here are some examples.
    </p>

    <h3>Deep Cleaning</h3>
    <p>
      A deep clean involves more intensive attention to hard-to-reach areas.
      Corners, edges, and hidden spaces can harbor built-up dirt and grime.
    </p>
    <p>
      Deep cleaning services can vary by cleaning company, so make sure to ask
      what it includes.
    </p>

    <h3>Carpet and Hard-Floor Care</h3>
    <p>
      The appropriate floor-care method depends on the material, finish, and
      maintenance requirements of the flooring.
    </p>
    <p>Some examples include:</p>
    <ul>
      <li>
        <Link to={ROUTES.services.commercialFloorCare}>
          Carpet extraction and specialized carpet treatment
        </Link>
      </li>
      <li>Machine scrubbing, polishing, or buffing</li>
      <li>Stripping and refinishing hard floors</li>
    </ul>
    <p>
      Professional commercial floor care helps maintain floor materials beyond
      basic sweeping, mopping, and vacuuming.
    </p>

    <h3>Windows and Other Specialized Requests</h3>
    <p>
      Window cleaning can vary from facility to facility. Let your commercial
      cleaning company know if you need interior or exterior window cleaning.
      High-access glass cleaning as well as post-construction cleanup may also
      be available as additional services.
    </p>
    <p>
      Good Steward provides these services in-house, including{" "}
      <Link to={ROUTES.janitorial}>
        deep cleaning, strip and wax, carpet care, window cleaning, and day
        porter service
      </Link>
      . We also offer sanitation and green cleaning options.
    </p>

    <h2>3. How Cleaning Needs Vary by Facility Type</h2>
    <p>
      The same core cleaning tasks may look different depending on how a
      facility is used. Offices, medical offices, schools, and churches each
      have their own unique set of cleaning needs.
    </p>

    <h3>Offices</h3>
    <p>
      The focus of office cleaning services is typically shared spaces that
      employees and visitors use on a daily basis. This includes reception
      areas, meeting rooms, break rooms, restrooms, and common workspaces.
    </p>
    <p>
      Areas with high foot traffic may need more frequent cleaning than areas
      used less often. The frequency of your cleaning schedule is based on how
      the space is used.
    </p>
    <p>
      If you have assigned desks or work with sensitive equipment, tell your
      cleaning provider. Clarify if there are any surfaces that should be left
      untouched.
    </p>

    <h3>Medical Offices</h3>
    <p>
      Medical and dental offices need a stricter approach than a standard
      office. Waiting rooms, exam rooms, and restrooms are cleaned and
      disinfected on a set schedule, with extra attention to high-touch
      surfaces. Tell your provider about any areas, equipment, or materials
      their team should not handle, and ask how they train staff for healthcare
      settings.
    </p>

    <h3>Schools</h3>
    <p>
      Schools have several types of spaces that need cleaning. Classrooms, staff
      rooms, hallways, restrooms, and cafeterias all need routine cleaning.
      Student traffic and the amount a space is used will be reflected in the
      cleaning schedule. For example, frequently used restrooms may need more
      frequent attention than a rarely used classroom space.
    </p>
    <p>
      School cleaning services should be scheduled around school hours and
      activities.
    </p>

    <figure className="blog-article__figure">
      <img
        className="blog-article__image"
        src="/images/blog/team-cleaning-school-classroom-desks.webp"
        alt="Good Steward team cleaning desks in a school classroom"
        width={1600}
        height={1066}
        loading="lazy"
      />
    </figure>

    <h3>Churches</h3>
    <p>
      Churches are often bustling with a variety of activities and gatherings.
      Sanctuaries, fellowship halls, restrooms, kitchens, children’s areas and
      more must be maintained.
    </p>
    <p>
      Different areas of a church may be used at different times throughout the
      week. A sanctuary may need attention after services, while a kitchen may
      need to be cleaned after a midweek Bible study.
    </p>
    <p>
      Your cleaning company should create a customized schedule for church
      cleaning services that ensures each space is given the attention it needs.
    </p>

    <h2>4. What May Not Be Included in a Standard Cleaning Contract?</h2>
    <p>
      There are many tasks that are considered “normal” in the commercial
      cleaning space. However, that does not mean every service is included in
      your commercial cleaning contract.
    </p>
    <p>Here is how the split usually looks:</p>

    <div className="blog-article__table-wrap">
      <table className="blog-article__table">
        <caption>Tasks usually included and usually quoted separately</caption>
        <thead>
          <tr>
            <th scope="col">Usually included</th>
            <th scope="col">Usually quoted separately</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Trash removal and liner replacement</td>
            <td>Carpet extraction</td>
          </tr>
          <tr>
            <td>Dusting and surface wiping</td>
            <td>Floor stripping, waxing, and buffing</td>
          </tr>
          <tr>
            <td>Vacuuming, sweeping, and mopping</td>
            <td>Exterior and high-access window cleaning</td>
          </tr>
          <tr>
            <td>Restroom cleaning and disinfection</td>
            <td>Inside refrigerators, ovens, and cabinets</td>
          </tr>
          <tr>
            <td>Break room counters, sinks, and appliance exteriors</td>
            <td>Dishes, personal belongings, inside desks</td>
          </tr>
          <tr>
            <td>Spot-cleaning doors, walls, and interior glass</td>
            <td>Post-construction cleanup</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      Please remember that these are examples, not universal rules.{" "}
      <strong>
        The scope of work outlined in your contract should specify what's
        included, how often tasks are completed, who supplies products, and what
        costs extra.
      </strong>{" "}
      See our guide to{" "}
      <Link to={ROUTES.blog.officeCleaningCostSanDiego}>
        office cleaning costs in San Diego
      </Link>
      .
    </p>

    <h2>5. How to Compare Commercial Cleaning Quotes</h2>
    <p>
      Every space is unique. Two buildings with the same square footage might
      have entirely different needs. The scope of work depends on things like
      foot traffic, restroom counts, floor types, service frequency and more.
    </p>
    <p>
      When comparing commercial cleaning companies in San Diego, you need to
      understand exactly what your quote includes. Here are some questions to
      ask potential providers:
    </p>
    <ul>
      <li>What tasks are included in each visit?</li>
      <li>Which tasks are scheduled less frequently?</li>
      <li>Are cleaning products and restroom supplies included?</li>
      <li>Which services cost extra?</li>
      <li>How are missed tasks, concerns, or changes in needs handled?</li>
      <li>
        Who will actually clean the building: employees or subcontractors?
      </li>
      <li>
        Is the company insured, and can it provide a certificate of insurance?
      </li>
    </ul>
    <p>
      A clear scope of work will make it easier to compare quotes. The lowest
      quote isn’t necessarily the best fit for your facility. Compare the
      services provided, not just the final cost.
    </p>
    <p>
      At Good Steward, we provide commercial cleaning services in San Diego and
      Oceanside / North County. Every job is done by our own in-house team. We
      never subcontract. We{" "}
      <Link to={ROUTES.contactUs}>begin with a consultation</Link> and on-site
      walkthrough to understand your facility's needs, schedule, and cleaning
      priorities, then build a cleaning plan around your space. Call{" "}
      {CONTACT_INFO.phoneLocal} to schedule yours.
    </p>

    <section className="blog-article__faq" aria-labelledby="article-faq-title">
      <h2 id="article-faq-title">
        Frequently Asked Questions About Commercial Cleaning
      </h2>
      {COMMERCIAL_CLEANING_CHECKLIST_FAQ.map((item, index) => (
        <div className="blog-article__faq-item" key={item.question}>
          <h3>{item.question}</h3>
          <p>
            {index === COMMERCIAL_CLEANING_CHECKLIST_FAQ.length - 1 ? (
              <>
                The terms commercial janitorial services and commercial cleaning
                are often used interchangeably. Both can include routine tasks
                like emptying trash, cleaning restrooms, maintaining floors, and
                tidying shared spaces. Commercial cleaning is a larger umbrella
                term that can also refer to more specialized services. This
                includes deep cleaning, carpet extraction, and hard-floor
                maintenance. However, it’s most important to understand which
                specific tasks a company includes in its service agreement. Good
                Steward&apos;s{" "}
                <Link to={ROUTES.janitorial}>
                  janitorial services in San Diego
                </Link>{" "}
                cover both.
              </>
            ) : (
              item.answer
            )}
          </p>
        </div>
      ))}
    </section>
  </BlogArticle>
)

export const Head = () => (
  <>
    <Seo
      title={article.seoTitle}
      description={article.description}
      pathname={article.path}
      image={article.image}
      type="article"
      publishedTime={article.publishedAt}
      modifiedTime={article.modifiedAt}
      author={article.author}
    />
    <StructuredData
      data={createBlogArticleSchema({
        article,
        breadcrumbs,
        faqItems: COMMERCIAL_CLEANING_CHECKLIST_FAQ,
      })}
    />
  </>
)

export default CommercialCleaningChecklistPage
