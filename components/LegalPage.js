import React from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import TabPanel from './TabPanel';

const useStyles = makeStyles({
  root: {},
});

const LegalPage = () => {
  const classes = useStyles();
  const root = clsx(classes.root);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="secondary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Privacy Policy" />
          <Tab label="Terms and Conditions" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h1>Privacy Policy</h1>
        <p>Last updated: May 24, 2020</p>
        <p>
          This Privacy Policy describes Our policies and procedures on the collection, use and
          disclosure of Your information when You use the Service and tells You about Your privacy
          rights and how the law protects You.
        </p>
        <p>
          We use Your Personal data to provide and improve the Service. By using the Service, You
          agree to the collection and use of information in accordance with this Privacy Policy.
        </p>
        <h1>Interpretation and Definitions</h1>
        <h2>Interpretation</h2>
        <p>
          The words of which the initial letter is capitalized have meanings defined under the
          following conditions. The following definitions shall have the same meaning regardless of
          whether they appear in singular or in plural.
        </p>
        <h2>Definitions</h2>
        <p>For the purposes of this Privacy Policy:</p>
        <ul>
          <li>
            <p>
              <strong>You</strong> means the individual accessing or using the Service, or the
              company, or other legal entity on behalf of which such individual is accessing or
              using the Service, as applicable.
            </p>
            <p>
              Under GDPR (General Data Protection Regulation), You can be referred to as the Data
              Subject or as the User as you are the individual using the Service.
            </p>
          </li>
          <li>
            <p>
              <strong>Company</strong> (referred to as either &quot;the Company&quot;,
              &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Overlly
              LLC, 334 E 6th St #7, New York, NY 10003.
            </p>
            <p>For the purpose of the GDPR, the Company is the Data Controller.</p>
          </li>
          <li>
            <p>
              <strong>Affiliate</strong>
{' '}
means an entity that controls, is controlled by or is under
              common control with a party, where &quot;control&quot; means ownership of 50% or more
              of the shares, equity interest or other securities entitled to vote for election of
              directors or other managing authority.
</p>
          </li>
          <li>
            <p>
              <strong>Account</strong>
{' '}
means a unique account created for You to access our Service
              or parts of our Service.
</p>
          </li>
          <li>
            <p>
              <strong>Website</strong> refers to Overlly, accessible from
{' '}
              <a href="overlly.com" rel="external nofollow noopener" target="_blank">
                overlly.com
              </a>
            </p>
          </li>
          <li>
            <p>
              <strong>Service</strong> refers to the Website.
            </p>
          </li>
          <li>
            <p>
              <strong>Country</strong> refers to: New York, United States
            </p>
          </li>
          <li>
            <p>
              <strong>Service Provider</strong>
{' '}
means any natural or legal person who processes the
              data on behalf of the Company. It refers to third-party companies or individuals
              employed by the Company to facilitate the Service, to provide the Service on behalf of
              the Company, to perform services related to the Service or to assist the Company in
              analyzing how the Service is used. For the purpose of the GDPR, Service Providers are
              considered Data Processors.
</p>
          </li>
          <li>
            <p>
              <strong>Third-party Social Media Service</strong>
{' '}
refers to any website or any social
              network website through which a User can log in or create an account to use the
              Service.
</p>
          </li>
          <li>
            <p>
              <strong>Personal Data</strong> is any information that relates to an identified or
              identifiable individual.
            </p>
            <p>
              For the purposes for GDPR, Personal Data means any information relating to You such as
              a name, an identification number, location data, online identifier or to one or more
              factors specific to the physical, physiological, genetic, mental, economic, cultural
              or social identity.
            </p>
            <p>
              For the purposes of the CCPA, Personal Data means any information that identifies,
              relates to, describes or is capable of being associated with, or could reasonably be
              linked, directly or indirectly, with You.
            </p>
          </li>
          <li>
            <p>
              <strong>Cookies</strong> are small files that are placed on Your computer, mobile
              device or any other device by a website, containing the details of Your browsing
              history on that website among its many uses.
            </p>
          </li>
          <li>
            <p>
              <strong>Device</strong> means any device that can access the Service such as a
              computer, a cellphone or a digital tablet.
            </p>
          </li>
          <li>
            <p>
              <strong>Usage Data</strong>
{' '}
refers to data collected automatically, either generated
              by the use of the Service or from the Service infrastructure itself (for example, the
              duration of a page visit).
</p>
          </li>
          <li>
            <p>
              <strong>Data Controller</strong>, for the purposes of the GDPR (General Data
              Protection Regulation), refers to the Company as the legal person which alone or
              jointly with others determines the purposes and means of the processing of Personal
              Data.
            </p>
          </li>
          <li>
            <p>
              <strong>Do Not Track</strong> (DNT) is a concept that has been promoted by US
              regulatory authorities, in particular the U.S. Federal Trade Commission (FTC), for the
              Internet industry to develop and implement a mechanism for allowing internet users to
              control the tracking of their online activities across websites.
            </p>
          </li>
          <li>
            <p>
              <strong>Business</strong>
, for the purpose of the CCPA (California Consumer Privacy
              Act), refers to the Company as the legal entity that collects Consumers' personal
              information and determines the purposes and means of the processing of Consumers'
              personal information, or on behalf of which such information is collected and that
              alone, or jointly with others, determines the purposes and means of the processing of
              consumers' personal information, that does business in the State of California.
</p>
          </li>
          <li>
            <p>
              <strong>Consumer</strong>
, for the purpose of the CCPA (California Consumer Privacy
              Act), means a natural person who is a California resident. A resident, as defined in
              the law, includes (1) every individual who is in the USA for other than a temporary or
              transitory purpose, and (2) every individual who is domiciled in the USA who is
              outside the USA for a temporary or transitory purpose.
</p>
          </li>
          <li>
            <p>
              <strong>Sale</strong>
, for the purpose of the CCPA (California Consumer Privacy Act),
              means selling, renting, releasing, disclosing, disseminating, making available,
              transferring, or otherwise communicating orally, in writing, or by electronic or other
              means, a Consumer's Personal information to another business or a third party for
              monetary or other valuable consideration.
</p>
          </li>
        </ul>
        <h1>Collecting and Using Your Personal Data</h1>
        <h2>Types of Data Collected</h2>
        <h3>Personal Data</h3>
        <p>
          While using Our Service, We may ask You to provide Us with certain personally identifiable
          information that can be used to contact or identify You. Personally identifiable
          information may include, but is not limited to:
        </p>
        <ul>
          <li>
            <p>Email address</p>
          </li>
          <li>
            <p>First name and last name</p>
          </li>
          <li>
            <p>Phone number</p>
          </li>
          <li>
            <p>Address, State, Province, ZIP/Postal code, City</p>
          </li>
          <li>
            <p>Usage Data</p>
          </li>
        </ul>
        <h3>Usage Data</h3>
        <p>Usage Data is collected automatically when using the Service.</p>
        <p>
          Usage Data may include information such as Your Device's Internet Protocol address (e.g.
          IP address), browser type, browser version, the pages of our Service that You visit, the
          time and date of Your visit, the time spent on those pages, unique device identifiers and
          other diagnostic data.
        </p>
        <p>
          When You access the Service by or through a mobile device, We may collect certain
          information automatically, including, but not limited to, the type of mobile device You
          use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile
          operating system, the type of mobile Internet browser You use, unique device identifiers
          and other diagnostic data.
        </p>
        <p>
          We may also collect information that Your browser sends whenever You visit our Service or
          when You access the Service by or through a mobile device.
        </p>
        <h3>Information from Third-Party Social Media Services</h3>
        <p>
          The Company allows You to create an account and log in to use the Service through the
          following Third-party Social Media Services:
        </p>
        <ul>
          <li>Google</li>
          <li>Facebook</li>
          <li>Twitter</li>
        </ul>
        <p>
          If You decide to register through or otherwise grant us access to a Third-Party Social
          Media Service, We may collect Personal data that is already associated with Your
          Third-Party Social Media Service's account, such as Your name, Your email address, Your
          activities or Your contact list associated with that account.
        </p>
        <p>
          You may also have the option of sharing additional information with the Company through
          Your Third-Party Social Media Service's account. If You choose to provide such information
          and Personal Data, during registration or otherwise, You are giving the Company permission
          to use, share, and store it in a manner consistent with this Privacy Policy.
        </p>
        <h3>Tracking Technologies and Cookies</h3>
        <p>
          We use Cookies and similar tracking technologies to track the activity on Our Service and
          store certain information. Tracking technologies used are beacons, tags, and scripts to
          collect and track information and to improve and analyze Our Service.
        </p>
        <p>
          You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being
          sent. However, if You do not accept Cookies, You may not be able to use some parts of our
          Service.
        </p>
        <p>
          Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies
          remain on your personal computer or mobile device when You go offline, while Session
          Cookies are deleted as soon as You close your web browser. Learn more about cookies:
{' '}
          <a href="https://www.termsfeed.com/blog/cookies/" target="_blank">
            All About Cookies
          </a>
          .
        </p>
        <p>We use both session and persistent Cookies for the purposes set out below:</p>
        <ul>
          <li>
            <p>
              <strong>Necessary / Essential Cookies</strong>
            </p>
            <p>Type: Session Cookies</p>
            <p>Administered by: Us</p>
            <p>
              Purpose: These Cookies are essential to provide You with services available through
              the Website and to enable You to use some of its features. They help to authenticate
              users and prevent fraudulent use of user accounts. Without these Cookies, the services
              that You have asked for cannot be provided, and We only use these Cookies to provide
              You with those services.
            </p>
          </li>
          <li>
            <p>
              <strong>Cookies Policy / Notice Acceptance Cookies</strong>
            </p>
            <p>Type: Persistent Cookies</p>
            <p>Administered by: Us</p>
            <p>
              Purpose: These Cookies identify if users have accepted the use of cookies on the
              Website.
            </p>
          </li>
          <li>
            <p>
              <strong>Functionality Cookies</strong>
            </p>
            <p>Type: Persistent Cookies</p>
            <p>Administered by: Us</p>
            <p>
              Purpose: These Cookies allow us to remember choices You make when You use the Website,
              such as remembering your login details or language preference. The purpose of these
              Cookies is to provide You with a more personal experience and to avoid You having to
              re-enter your preferences every time You use the Website.
            </p>
          </li>
          <li>
            <p>
              <strong>Tracking and Performance Cookies</strong>
            </p>
            <p>Type: Persistent Cookies</p>
            <p>Administered by: Third-Parties</p>
            <p>
              Purpose: These Cookies are used to track information about traffic to the Website and
              how users use the Website. The information gathered via these Cookies may directly or
              indirectly identify you as an individual visitor. This is because the information
              collected is typically linked to a pseudonymous identifier associated with the device
              you use to access the Website. We may also use these Cookies to test new
              advertisements, pages, features or new functionality of the Website to see how our
              users react to them.
            </p>
          </li>
        </ul>
        <p>
          For more information about the cookies we use and your choices regarding cookies, please
          visit our Cookies Policy or the Cookies section of our Privacy Policy.
        </p>
        <h2>Use of Your Personal Data</h2>
        <p>The Company may use Personal Data for the following purposes:</p>
        <ul>
          <li>
            <strong>To provide and maintain our Service</strong>
, including to monitor the usage of
            our Service.
</li>
          <li>
            <strong>To manage Your Account:</strong>
{' '}
to manage Your registration as a user of the
            Service. The Personal Data You provide can give You access to different functionalities
            of the Service that are available to You as a registered user.
</li>
          <li>
            <strong>For the performance of a contract:</strong> the development, compliance and
            undertaking of the purchase contract for the products, items or services You have
            purchased or of any other contract with Us through the Service.
          </li>
          <li>
            <strong>To contact You:</strong>
{' '}
To contact You by email, telephone calls, SMS, or other
            equivalent forms of electronic communication, such as a mobile application's push
            notifications regarding updates or informative communications related to the
            functionalities, products or contracted services, including the security updates, when
            necessary or reasonable for their implementation.
</li>
          <li>
            <strong>To provide You</strong>
{' '}
with news, special offers and general information about
            other goods, services and events which we offer that are similar to those that you have
            already purchased or enquired about unless You have opted not to receive such
            information.
</li>
          <li>
            <strong>To manage Your requests:</strong> To attend and manage Your requests to Us.
          </li>
        </ul>
        <p>We may share your personal information in the following situations:</p>
        <ul>
          <li>
            <strong>With Service Providers:</strong> We may share Your personal information with
            Service Providers to monitor and analyze the use of our Service, to advertise on third
            party websites to You after You visited our Service, for payment processing, to contact
            You.
          </li>
          <li>
            <strong>For Business transfers:</strong>
{' '}
We may share or transfer Your personal
            information in connection with, or during negotiations of, any merger, sale of Company
            assets, financing, or acquisition of all or a portion of our business to another
            company.
</li>
          <li>
            <strong>With Affiliates:</strong>
{' '}
We may share Your information with Our affiliates, in
            which case we will require those affiliates to honor this Privacy Policy. Affiliates
            include Our parent company and any other subsidiaries, joint venture partners or other
            companies that We control or that are under common control with Us.
</li>
          <li>
            <strong>With Business partners:</strong>
{' '}
We may share Your information with Our business
            partners to offer You certain products, services or promotions.
</li>
          <li>
            <strong>With other users:</strong> when You share personal information or otherwise
            interact in the public areas with other users, such information may be viewed by all
            users and may be publicly distributed outside. If You interact with other users or
            register through a Third-Party Social Media Service, Your contacts on the Third-Party
            Social Media Service may see Your name, profile, pictures and description of Your
            activity. Similarly, other users will be able to view descriptions of Your activity,
            communicate with You and view Your profile.
          </li>
        </ul>
        <h2>Retention of Your Personal Data</h2>
        <p>
          The Company will retain Your Personal Data only for as long as is necessary for the
          purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the
          extent necessary to comply with our legal obligations (for example, if we are required to
          retain your data to comply with applicable laws), resolve disputes, and enforce our legal
          agreements and policies.
        </p>
        <p>
          The Company will also retain Usage Data for internal analysis purposes. Usage Data is
          generally retained for a shorter period of time, except when this data is used to
          strengthen the security or to improve the functionality of Our Service, or We are legally
          obligated to retain this data for longer time periods.
        </p>
        <h2>Transfer of Your Personal Data</h2>
        <p>
          Your information, including Personal Data, is processed at the Company's operating offices
          and in any other places where the parties involved in the processing are located. It means
          that this information may be transferred to — and maintained on — computers located
          outside of Your state, province, country or other governmental jurisdiction where the data
          protection laws may differ than those from Your jurisdiction.
        </p>
        <p>
          Your consent to this Privacy Policy followed by Your submission of such information
          represents Your agreement to that transfer.
        </p>
        <p>
          The Company will take all steps reasonably necessary to ensure that Your data is treated
          securely and in accordance with this Privacy Policy and no transfer of Your Personal Data
          will take place to an organization or a country unless there are adequate controls in
          place including the security of Your data and other personal information.
        </p>
        <h2>Disclosure of Your Personal Data</h2>
        <h3>Business Transactions</h3>
        <p>
          If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may
          be transferred. We will provide notice before Your Personal Data is transferred and
          becomes subject to a different Privacy Policy.
        </p>
        <h3>Law enforcement</h3>
        <p>
          Under certain circumstances, the Company may be required to disclose Your Personal Data if
          required to do so by law or in response to valid requests by public authorities (e.g. a
          court or a government agency).
        </p>
        <h3>Other legal requirements</h3>
        <p>
          The Company may disclose Your Personal Data in the good faith belief that such action is
          necessary to:
        </p>
        <ul>
          <li>Comply with a legal obligation</li>
          <li>Protect and defend the rights or property of the Company</li>
          <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
          <li>Protect the personal safety of Users of the Service or the public</li>
          <li>Protect against legal liability</li>
        </ul>
        <h2>Security of Your Personal Data</h2>
        <p>
          The security of Your Personal Data is important to Us, but remember that no method of
          transmission over the Internet, or method of electronic storage is 100% secure. While We
          strive to use commercially acceptable means to protect Your Personal Data, We cannot
          guarantee its absolute security.
        </p>
        <h1>Detailed Information on the Processing of Your Personal Data</h1>
        <p>
          Service Providers have access to Your Personal Data only to perform their tasks on Our
          behalf and are obligated not to disclose or use it for any other purpose.
        </p>
        <h2>Analytics</h2>
        <p>
          We may use third-party Service providers to monitor and analyze the use of our Service.
        </p>
        <ul>
          <li>
            <p>
              <strong>Google Analytics</strong>
            </p>
            <p>
              Google Analytics is a web analytics service offered by Google that tracks and reports
              website traffic. Google uses the data collected to track and monitor the use of our
              Service. This data is shared with other Google services. Google may use the collected
              data to contextualise and personalise the ads of its own advertising network.
            </p>
            <p>
              You can opt-out of having made your activity on the Service available to Google
              Analytics by installing the Google Analytics opt-out browser add-on. The add-on
              prevents the Google Analytics JavaScript (ga.js, analytics.js and dc.js) from sharing
              information with Google Analytics about visits activity.
            </p>
            <p>
              For more information on the privacy practices of Google, please visit the Google
              Privacy &amp; Terms web page:
{' '}
              <a
                href="https://policies.google.com/privacy"
                rel="external nofollow noopener"
                target="_blank"
              >
                https://policies.google.com/privacy
              </a>
            </p>
          </li>
          <li>
            <p>
              <strong>Fullstory</strong>
            </p>
            <p>
              Their Privacy Policy can be viewed at
{' '}
              <a
                href="https://www.fullstory.com/legal/privacy/"
                rel="external nofollow noopener"
                target="_blank"
              >
                https://www.fullstory.com/legal/privacy/
              </a>
            </p>
          </li>
        </ul>
        <h2>Email Marketing</h2>
        <p>
          We may use Your Personal Data to contact You with newsletters, marketing or promotional
          materials and other information that may be of interest to You. You may opt-out of
          receiving any, or all, of these communications from Us by following the unsubscribe link
          or instructions provided in any email We send or by contacting Us.
        </p>
        <p>We may use Email Marketing Service Providers to manage and send emails to You.</p>
        <ul>
          <li>
            <p>
              <strong>Mailchimp</strong>
            </p>
            <p>
              Mailchimp is an email marketing sending service provided by The Rocket Science Group
              LLC.
            </p>
            <p>
              For more information on the privacy practices of Mailchimp, please visit their Privacy
              policy:
{' '}
              <a
                href="https://mailchimp.com/legal/privacy/"
                rel="external nofollow noopener"
                target="_blank"
              >
                https://mailchimp.com/legal/privacy/
              </a>
            </p>
          </li>
        </ul>
        <h2>Payments</h2>
        <p>
          We may provide paid products and/or services within the Service. In that case, we may use
          third-party services for payment processing (e.g. payment processors).
        </p>
        <p>
          We will not store or collect Your payment card details. That information is provided
          directly to Our third-party payment processors whose use of Your personal information is
          governed by their Privacy Policy. These payment processors adhere to the standards set by
          PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of
          brands like Visa, Mastercard, American Express and Discover. PCI-DSS requirements help
          ensure the secure handling of payment information.
        </p>
        <ul>
          <li>
            <p>
              <strong>Stripe</strong>
            </p>
            <p>
              Their Privacy Policy can be viewed at
{' '}
              <a
                href="https://stripe.com/us/privacy"
                rel="external nofollow noopener"
                target="_blank"
              >
                https://stripe.com/us/privacy
              </a>
            </p>
          </li>
        </ul>
        <h2>Behavioral Remarketing</h2>
        <p>
          The Company uses remarketing services to advertise on third party websites to You after
          You visited our Service. We and Our third-party vendors use cookies to inform, optimize
          and serve ads based on Your past visits to our Service.
        </p>
        <ul>
          <li>
            <p>
              <strong>Google Ads (AdWords)</strong>
            </p>
            <p>Google Ads (AdWords) remarketing service is provided by Google Inc.</p>
            <p>
              You can opt-out of Google Analytics for Display Advertising and customise the Google
              Display Network ads by visiting the Google Ads Settings page:
{' '}
              <a
                href="http://www.google.com/settings/ads"
                rel="external nofollow noopener"
                target="_blank"
              >
                http://www.google.com/settings/ads
              </a>
            </p>
            <p>
              Google also recommends installing the Google Analytics Opt-out Browser Add-on -
{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                rel="external nofollow noopener"
                target="_blank"
              >
                https://tools.google.com/dlpage/gaoptout
              </a>
{' '}
              - for your web browser. Google Analytics Opt-out Browser Add-on provides visitors with
              the ability to prevent their data from being collected and used by Google Analytics.
            </p>
            <p>
              For more information on the privacy practices of Google, please visit the Google
              Privacy &amp; Terms web page:
{' '}
              <a
                href="https://policies.google.com/privacy"
                rel="external nofollow noopener"
                target="_blank"
              >
                https://policies.google.com/privacy
              </a>
            </p>
          </li>
          <li>
            <p>
              <strong>Facebook</strong>
            </p>
            <p>Facebook remarketing service is provided by Facebook Inc.</p>
            <p>
              You can learn more about interest-based advertising from Facebook by visiting this
              page:
{' '}
              <a
                href="https://www.facebook.com/help/164968693837950"
                rel="external nofollow noopener"
                target="_blank"
              >
                https://www.facebook.com/help/164968693837950
              </a>
            </p>
            <p>
              To opt-out from Facebook's interest-based ads, follow these instructions from
              Facebook:
{' '}
              <a
                href="https://www.facebook.com/help/568137493302217"
                rel="external nofollow noopener"
                target="_blank"
              >
                https://www.facebook.com/help/568137493302217
              </a>
            </p>
            <p>
              Facebook adheres to the Self-Regulatory Principles for Online Behavioural Advertising
              established by the Digital Advertising Alliance. You can also opt-out from Facebook
              and other participating companies through the Digital Advertising Alliance in the USA
{' '}
              <a
                href="http://www.aboutads.info/choices/"
                rel="external nofollow noopener"
                target="_blank"
              >
                http://www.aboutads.info/choices/
              </a>
              , the Digital Advertising Alliance of Canada in Canada
{' '}
              <a href="http://youradchoices.ca/" rel="external nofollow noopener" target="_blank">
                http://youradchoices.ca/
              </a>
{' '}
              or the European Interactive Digital Advertising Alliance in Europe
{' '}
              <a
                href="http://www.youronlinechoices.eu/"
                rel="external nofollow noopener"
                target="_blank"
              >
                http://www.youronlinechoices.eu/
              </a>
              , or opt-out using your mobile device settings.
            </p>
            <p>
              For more information on the privacy practices of Facebook, please visit Facebook's
              Data Policy:
{' '}
              <a
                href="https://www.facebook.com/privacy/explanation"
                rel="external nofollow noopener"
                target="_blank"
              >
                https://www.facebook.com/privacy/explanation
              </a>
            </p>
          </li>
        </ul>
        <h1>GDPR Privacy</h1>
        <h2>Legal Basis for Processing Personal Data under GDPR</h2>
        <p>We may process Personal Data under the following conditions:</p>
        <ul>
          <li>
            <strong>Consent:</strong>
{' '}
You have given Your consent for processing Personal Data for
            one or more specific purposes.
</li>
          <li>
            <strong>Performance of a contract:</strong>
{' '}
Provision of Personal Data is necessary for
            the performance of an agreement with You and/or for any pre-contractual obligations
            thereof.
</li>
          <li>
            <strong>Legal obligations:</strong>
{' '}
Processing Personal Data is necessary for compliance
            with a legal obligation to which the Company is subject.
</li>
          <li>
            <strong>Vital interests:</strong> Processing Personal Data is necessary in order to
            protect Your vital interests or of another natural person.
          </li>
          <li>
            <strong>Public interests:</strong>
{' '}
Processing Personal Data is related to a task that is
            carried out in the public interest or in the exercise of official authority vested in
            the Company.
</li>
          <li>
            <strong>Legitimate interests:</strong> Processing Personal Data is necessary for the
            purposes of the legitimate interests pursued by the Company.
          </li>
        </ul>
        <p>
          In any case, the Company will gladly help to clarify the specific legal basis that applies
          to the processing, and in particular whether the provision of Personal Data is a statutory
          or contractual requirement, or a requirement necessary to enter into a contract.
        </p>
        <h2>Your Rights under the GDPR</h2>
        <p>
          The Company undertakes to respect the confidentiality of Your Personal Data and to
          guarantee You can exercise Your rights.
        </p>
        <p>
          You have the right under this Privacy Policy, and by law if You are within the EU, to:
        </p>
        <ul>
          <li>
            <strong>Request access to Your Personal Data.</strong>
{' '}
The right to access, update or
            delete the information We have on You. Whenever made possible, you can access, update or
            request deletion of Your Personal Data directly within Your account settings section. If
            you are unable to perform these actions yourself, please contact Us to assist You. This
            also enables You to receive a copy of the Personal Data We hold about You.
</li>
          <li>
            <strong>Request correction of the Personal Data that We hold about You.</strong> You
            have the right to to have any incomplete or inaccurate information We hold about You
            corrected.
          </li>
          <li>
            <strong>Object to processing of Your Personal Data.</strong>
{' '}
This right exists where We
            are relying on a legitimate interest as the legal basis for Our processing and there is
            something about Your particular situation, which makes You want to object to our
            processing of Your Personal Data on this ground. You also have the right to object where
            We are processing Your Personal Data for direct marketing purposes.
</li>
          <li>
            <strong>Request erasure of Your Personal Data.</strong>
{' '}
You have the right to ask Us to
            delete or remove Personal Data when there is no good reason for Us to continue
            processing it.
</li>
          <li>
            <strong>Request the transfer of Your Personal Data.</strong>
{' '}
We will provide to You, or
            to a third-party You have chosen, Your Personal Data in a structured, commonly used,
            machine-readable format. Please note that this right only applies to automated
            information which You initially provided consent for Us to use or where We used the
            information to perform a contract with You.
</li>
          <li>
            <strong>Withdraw Your consent.</strong>
{' '}
You have the right to withdraw Your consent on
            using your Personal Data. If You withdraw Your consent, We may not be able to provide
            You with access to certain specific functionalities of the Service.
</li>
        </ul>
        <h2>Exercising of Your GDPR Data Protection Rights</h2>
        <p>
          You may exercise Your rights of access, rectification, cancellation and opposition by
          contacting Us. Please note that we may ask You to verify Your identity before responding
          to such requests. If You make a request, We will try our best to respond to You as soon as
          possible.
        </p>
        <p>
          You have the right to complain to a Data Protection Authority about Our collection and use
          of Your Personal Data. For more information, if You are in the European Economic Area
          (EEA), please contact Your local data protection authority in the EEA.
        </p>
        <h1>CCPA Privacy</h1>
        <h2>Your Rights under the CCPA</h2>
        <p>
          Under this Privacy Policy, and by law if You are a resident of California, You have the
          following rights:
        </p>
        <ul>
          <li>
            <strong>The right to notice.</strong>
{' '}
You must be properly notified which categories of
            Personal Data are being collected and the purposes for which the Personal Data is being
            used.
</li>
          <li>
            <strong>The right to access / the right to request.</strong> The CCPA permits You to
            request and obtain from the Company information regarding the disclosure of Your
            Personal Data that has been collected in the past 12 months by the Company or its
            subsidiaries to a third-party for the third party's direct marketing purposes.
          </li>
          <li>
            <strong>The right to say no to the sale of Personal Data.</strong> You also have the
            right to ask the Company not to sell Your Personal Data to third parties. You can submit
            such a request by visiting our &quot;Do Not Sell My Personal Information&quot; section
            or web page.
          </li>
          <li>
            <strong>The right to know about Your Personal Data.</strong>
{' '}
You have the right to
            request and obtain from the Company information regarding the disclosure of the
            following:
<ul>
              <li>The categories of Personal Data collected</li>
              <li>The sources from which the Personal Data was collected</li>
              <li>
    The business or commercial purpose for collecting or selling the Personal Data
              </li>
              <li>Categories of third parties with whom We share Personal Data</li>
              <li>The specific pieces of Personal Data we collected about You</li>
            </ul>
          </li>
          <li>
            <strong>The right to delete Personal Data.</strong>
{' '}
You also have the right to request
            the deletion of Your Personal Data that have been collected in the past 12 months.
</li>
          <li>
            <strong>The right not to be discriminated against.</strong>
{' '}
You have the right not to be
            discriminated against for exercising any of Your Consumer's rights, including by:
<ul>
              <li>Denying goods or services to You</li>
              <li>
    Charging different prices or rates for goods or services, including the use of
    discounts or other benefits or imposing penalties
              </li>
              <li>Providing a different level or quality of goods or services to You</li>
              <li>
    Suggesting that You will receive a different price or rate for goods or services or
    a different level or quality of goods or services.
              </li>
            </ul>
          </li>
        </ul>
        <h2>Exercising Your CCPA Data Protection Rights</h2>
        <p>
          In order to exercise any of Your rights under the CCPA, and if you are a California
          resident, You can email or call us or visit our &quot;Do Not Sell My Personal
          Information&quot; section or web page.
        </p>
        <p>
          The Company will disclose and deliver the required information free of charge within 45
          days of receiving Your verifiable request. The time period to provide the required
          information may be extended once by an additional 45 days when reasonable necessary and
          with prior notice.
        </p>
        <h2>Do Not Sell My Personal Information</h2>
        <p>
          We do not sell personal information. However, the Service Providers we partner with (for
          example, our advertising partners) may use technology on the Service that
          &quot;sells&quot; personal information as defined by the CCPA law.
        </p>
        <p>
          If you wish to opt out of the use of your personal information for interest-based
          advertising purposes and these potential sales as defined under CCPA law, you may do so by
          following the instructions below.
        </p>
        <p>
          Please note that any opt out is specific to the browser You use. You may need to opt out
          on every browser that you use.
        </p>
        <h3>Website</h3>
        <p>
          You can opt out of receiving ads that are personalized as served by our Service Providers
          by following our instructions presented on the Service:
        </p>
        <ul>
          <li>From Our &quot;Cookie Consent&quot; notice banner</li>
          <li>Or from Our &quot;CCPA Opt-out&quot; notice banner</li>
          <li>Or from Our &quot;Do Not Sell My Personal Information&quot; notice banner</li>
          <li>Or from Our &quot;Do Not Sell My Personal Information&quot; link</li>
        </ul>
        <p>
          The opt out will place a cookie on Your computer that is unique to the browser You use to
          opt out. If you change browsers or delete the cookies saved by your browser, you will need
          to opt out again.
        </p>
        <h3>Mobile Devices</h3>
        <p>
          Your mobile device may give you the ability to opt out of the use of information about the
          apps you use in order to serve you ads that are targeted to your interests:
        </p>
        <ul>
          <li>
            &quot;Opt out of Interest-Based Ads&quot; or &quot;Opt out of Ads Personalization&quot;
            on Android devices
          </li>
          <li>&quot;Limit Ad Tracking&quot; on iOS devices</li>
        </ul>
        <p>
          You can also stop the collection of location information from Your mobile device by
          changing the preferences on your mobile device.
        </p>
        <h1>
          &quot;Do Not Track&quot; Policy as Required by California Online Privacy Protection Act
          (CalOPPA)
        </h1>
        <p>Our Service does not respond to Do Not Track signals.</p>
        <p>
          However, some third party websites do keep track of Your browsing activities. If You are
          visiting such websites, You can set Your preferences in Your web browser to inform
          websites that You do not want to be tracked. You can enable or disable DNT by visiting the
          preferences or settings page of Your web browser.
        </p>
        <h1>Your California Privacy Rights (California's Shine the Light law)</h1>
        <p>
          Under California Civil Code Section 1798 (California's Shine the Light law), California
          residents with an established business relationship with us can request information once a
          year about sharing their Personal Data with third parties for the third parties' direct
          marketing purposes.
        </p>
        <p>
          If you'd like to request more information under the California Shine the Light law, and if
          you are a California resident, You can contact Us using the contact information provided
          below.
        </p>
        <h1>
          California Privacy Rights for Minor Users (California Business and Professions Code
          Section 22581)
        </h1>
        <p>
          California Business and Professions Code section 22581 allow California residents under
          the age of 18 who are registered users of online sites, services or applications to
          request and obtain removal of content or information they have publicly posted.
        </p>
        <p>
          To request removal of such data, and if you are a California resident, You can contact Us
          using the contact information provided below, and include the email address associated
          with Your account.
        </p>
        <p>
          Be aware that Your request does not guarantee complete or comprehensive removal of content
          or information posted online and that the law may not permit or require removal in certain
          circumstances.
        </p>
        <h1>Links to Other Websites</h1>
        <p>
          Our Service may contain links to other websites that are not operated by Us. If You click
          on a third party link, You will be directed to that third party's site. We strongly advise
          You to review the Privacy Policy of every site You visit.
        </p>
        <p>
          We have no control over and assume no responsibility for the content, privacy policies or
          practices of any third party sites or services.
        </p>
        <h1>Changes to this Privacy Policy</h1>
        <p>
          We may update our Privacy Policy from time to time. We will notify You of any changes by
          posting the new Privacy Policy on this page.
        </p>
        <p>
          We will let You know via email and/or a prominent notice on Our Service, prior to the
          change becoming effective and update the &quot;Last updated&quot; date at the top of this
          Privacy Policy.
        </p>
        <p>
          You are advised to review this Privacy Policy periodically for any changes. Changes to
          this Privacy Policy are effective when they are posted on this page.
        </p>
        <h1>Contact Us</h1>
        <p>If you have any questions about this Privacy Policy, You can contact us:</p>
        <ul>
          <li>
            By email:
{' '}
            <a
              href="mailto:support@overlly.com"
              className="__cf_email__"
              data-cfemail="f5868085859a8781b59a83908799998cdb969a98"
            >
              support@overlly.com
            </a>
          </li>
        </ul>
        <script
          data-cfasync="false"
          src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1>Terms and Conditions</h1>
        <p>Last updated: May 24, 2020</p>
        <p>Please read these terms and conditions carefully before using Our Service.</p>
        <h1>Interpretation and Definitions</h1>
        <h2>Interpretation</h2>
        <p>
          The words of which the initial letter is capitalized have meanings defined under the
          following conditions.
        </p>
        <p>
          The following definitions shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </p>
        <h2>Definitions</h2>
        <p>For the purposes of these Terms and Conditions:</p>
        <ul>
          <li>
            <p>
              <strong>Affiliate</strong>
{' '}
means an entity that controls, is controlled by or is under
              common control with a party, where &quot;control&quot; means ownership of 50% or more
              of the shares, equity interest or other securities entitled to vote for election of
              directors or other managing authority.
</p>
          </li>
          <li>
            <p>
              <strong>Account</strong>
{' '}
means a unique account created for You to access our Service
              or parts of our Service.
</p>
          </li>
          <li>
            <p>
              <strong>Company</strong>
{' '}
(referred to as either &quot;the Company&quot;,
              &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Overlly
              LLC, 334 E 6th St #7, New York, NY 10003.
</p>
          </li>
          <li>
            <p>
              <strong>Content</strong>
{' '}
refers to content such as text, images, or other information
              that can be posted, uploaded, linked to or otherwise made available by You, regardless
              of the form of that content.
</p>
          </li>
          <li>
            <p>
              <strong>Country</strong>
{' '}
refers to: New York, United States
</p>
          </li>
          <li>
            <p>
              <strong>Device</strong>
{' '}
means any device that can access the Service such as a
              computer, a cellphone or a digital tablet.
</p>
          </li>
          <li>
            <p>
              <strong>Feedback</strong>
{' '}
means feedback, innovations or suggestions sent by You
              regarding the attributes, performance or features of our Service.
</p>
          </li>
          <li>
            <p>
              <strong>Service</strong>
{' '}
refers to the Website.
</p>
          </li>
          <li>
            <p>
              <strong>Terms and Conditions</strong>
{' '}
(also referred as &quot;Terms&quot;) mean these
              Terms and Conditions that form the entire agreement between You and the Company
              regarding the use of the Service.
</p>
          </li>
          <li>
            <p>
              <strong>Third-party Social Media Service</strong>
{' '}
means any services or content
              (including data, information, products or services) provided by a third-party that may
              be displayed, included or made available by the Service.
</p>
          </li>
          <li>
            <p>
              <strong>Website</strong>
{' '}
refers to Overlly, accessible from
{' '}
              <a href="overlly.com" rel="external nofollow noopener" target="_blank">
                overlly.com
              </a>
            </p>
          </li>
          <li>
            <p>
              <strong>You</strong>
{' '}
means the individual accessing or using the Service, or the
              company, or other legal entity on behalf of which such individual is accessing or
              using the Service, as applicable.
</p>
          </li>
        </ul>
        <h1>Acknowledgement</h1>
        <p>
          These are the Terms and Conditions governing the use of this Service and the agreement
          that operates between You and the Company. These Terms and Conditions set out the rights
          and obligations of all users regarding the use of the Service.
        </p>
        <p>
          Your access to and use of the Service is conditioned on Your acceptance of and compliance
          with these Terms and Conditions. These Terms and Conditions apply to all visitors, users
          and others who access or use the Service.
        </p>
        <p>
          By accessing or using the Service You agree to be bound by these Terms and Conditions. If
          You disagree with any part of these Terms and Conditions then You may not access the
          Service.
        </p>
        <p>
          You represent that you are over the age of 18. The Company does not permit those under 18
          to use the Service.
        </p>
        <p>
          Your access to and use of the Service is also conditioned on Your acceptance of and
          compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our
          policies and procedures on the collection, use and disclosure of Your personal information
          when You use the Application or the Website and tells You about Your privacy rights and
          how the law protects You. Please read Our Privacy Policy carefully before using Our
          Service.
        </p>
        <h1>User Accounts</h1>
        <p>
          When You create an account with Us, You must provide Us information that is accurate,
          complete, and current at all times. Failure to do so constitutes a breach of the Terms,
          which may result in immediate termination of Your account on Our Service.
        </p>
        <p>
          You are responsible for safeguarding the password that You use to access the Service and
          for any activities or actions under Your password, whether Your password is with Our
          Service or a Third-Party Social Media Service.
        </p>
        <p>
          You agree not to disclose Your password to any third party. You must notify Us immediately
          upon becoming aware of any breach of security or unauthorized use of Your account.
        </p>
        <p>
          You may not use as a username the name of another person or entity or that is not lawfully
          available for use, a name or trademark that is subject to any rights of another person or
          entity other than You without appropriate authorization, or a name that is otherwise
          offensive, vulgar or obscene.
        </p>
        <h1>Content</h1>
        <h2>Your Right to Post Content</h2>
        <p>
          Our Service allows You to post Content. You are responsible for the Content that You post
          to the Service, including its legality, reliability, and appropriateness.
        </p>
        <p>
          By posting Content to the Service, You grant Us the right and license to use, modify,
          publicly perform, publicly display, reproduce, and distribute such Content on and through
          the Service. You retain any and all of Your rights to any Content You submit, post or
          display on or through the Service and You are responsible for protecting those rights. You
          agree that this license includes the right for Us to make Your Content available to other
          users of the Service, who may also use Your Content subject to these Terms.
        </p>
        <p>
          You represent and warrant that: (i) the Content is Yours (You own it) or You have the
          right to use it and grant Us the rights and license as provided in these Terms, and (ii)
          the posting of Your Content on or through the Service does not violate the privacy rights,
          publicity rights, copyrights, contract rights or any other rights of any person.
        </p>
        <h2>Content Restrictions</h2>
        <p>
          The Company is not responsible for the content of the Service's users. You expressly
          understand and agree that You are solely responsible for the Content and for all activity
          that occurs under your account, whether done so by You or any third person using Your
          account.
        </p>
        <p>
          You may not transmit any Content that is unlawful, offensive, upsetting, intended to
          disgust, threatening, libelous, defamatory, obscene or otherwise objectionable. Examples
          of such objectionable Content include, but are not limited to, the following:
        </p>
        <ul>
          <li>Unlawful or promoting unlawful activity.</li>
          <li>
            Defamatory, discriminatory, or mean-spirited content, including references or commentary
            about religion, race, sexual orientation, gender, national/ethnic origin, or other
            targeted groups.
          </li>
          <li>
            Spam, machine – or randomly – generated, constituting unauthorized or unsolicited
            advertising, chain letters, any other form of unauthorized solicitation, or any form of
            lottery or gambling.
          </li>
          <li>
            Containing or installing any viruses, worms, malware, trojan horses, or other content
            that is designed or intended to disrupt, damage, or limit the functioning of any
            software, hardware or telecommunications equipment or to damage or obtain unauthorized
            access to any data or other information of a third person.
          </li>
          <li>
            Infringing on any proprietary rights of any party, including patent, trademark, trade
            secret, copyright, right of publicity or other rights.
          </li>
          <li>
            Impersonating any person or entity including the Company and its employees or
            representatives.
          </li>
          <li>Violating the privacy of any third person.</li>
          <li>False information and features.</li>
        </ul>
        <p>
          The Company reserves the right, but not the obligation, to, in its sole discretion,
          determine whether or not any Content is appropriate and complies with this Terms, refuse
          or remove this Content. The Company further reserves the right to make formatting and
          edits and change the manner any Content. The Company can also limit or revoke the use of
          the Service if You post such objectionable Content. As the Company cannot control all
          content posted by users and/or third parties on the Service, you agree to use the Service
          at your own risk. You understand that by using the Service You may be exposed to content
          that You may find offensive, indecent, incorrect or objectionable, and You agree that
          under no circumstances will the Company be liable in any way for any content, including
          any errors or omissions in any content, or any loss or damage of any kind incurred as a
          result of your use of any content.
        </p>
        <h2>Content Backups</h2>
        <p>
          Although regular backups of Content are performed, the Company do not guarantee there will
          be no loss or corruption of data.
        </p>
        <p>
          Corrupt or invalid backup points may be caused by, without limitation, Content that is
          corrupted prior to being backed up or that changes during the time a backup is performed.
        </p>
        <p>
          The Company will provide support and attempt to troubleshoot any known or discovered
          issues that may affect the backups of Content. But You acknowledge that the Company has no
          liability related to the integrity of Content or the failure to successfully restore
          Content to a usable state.
        </p>
        <p>
          You agree to maintain a complete and accurate copy of any Content in a location
          independent of the Service.
        </p>
        <h1>Copyright Policy</h1>
        <h2>Intellectual Property Infringement</h2>
        <p>
          We respect the intellectual property rights of others. It is Our policy to respond to any
          claim that Content posted on the Service infringes a copyright or other intellectual
          property infringement of any person.
        </p>
        <p>
          If You are a copyright owner, or authorized on behalf of one, and You believe that the
          copyrighted work has been copied in a way that constitutes copyright infringement that is
          taking place through the Service, You must submit Your notice in writing to the attention
          of our copyright agent via email at
{' '}
          <a
            href="/cdn-cgi/l/email-protection"
            className="__cf_email__"
            data-cfemail="275452575748555367485142554b4b5e0944484a"
          >
            [email&#160;protected]
          </a>
{' '}
          and include in Your notice a detailed description of the alleged infringement.
        </p>
        <p>
          You may be held accountable for damages (including costs and attorneys' fees) for
          misrepresenting that any Content is infringing Your copyright.
        </p>
        <h2>DMCA Notice and DMCA Procedure for Copyright Infringement Claims</h2>
        <p>
          You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by
          providing our Copyright Agent with the following information in writing (see 17 U.S.C
          512(c)(3) for further detail):
        </p>
        <ul>
          <li>
            An electronic or physical signature of the person authorized to act on behalf of the
            owner of the copyright's interest.
          </li>
          <li>
            A description of the copyrighted work that You claim has been infringed, including the
            URL (i.e., web page address) of the location where the copyrighted work exists or a copy
            of the copyrighted work.
          </li>
          <li>
            Identification of the URL or other specific location on the Service where the material
            that You claim is infringing is located.
          </li>
          <li>Your address, telephone number, and email address.</li>
          <li>
            A statement by You that You have a good faith belief that the disputed use is not
            authorized by the copyright owner, its agent, or the law.
          </li>
          <li>
            A statement by You, made under penalty of perjury, that the above information in Your
            notice is accurate and that You are the copyright owner or authorized to act on the
            copyright owner's behalf.
          </li>
        </ul>
        <p>
          You can contact our copyright agent via email at
{' '}
          <a
            href="/cdn-cgi/l/email-protection"
            className="__cf_email__"
            data-cfemail="87f4f2f7f7e8f5f3c7e8f1e2f5ebebfea9e4e8eaa9"
          >
            [email&#160;protected]
          </a>
          Upon receipt of a notification, the Company will take whatever action, in its sole
          discretion, it deems appropriate, including removal of the challenged content from the
          Service.
        </p>
        <h1>Intellectual Property</h1>
        <p>
          The Service and its original content (excluding Content provided by You or other users),
          features and functionality are and will remain the exclusive property of the Company and
          its licensors.
        </p>
        <p>
          The Service is protected by copyright, trademark, and other laws of both the Country and
          foreign countries.
        </p>
        <p>
          Our trademarks and trade dress may not be used in connection with any product or service
          without the prior written consent of the Company.
        </p>
        <h1>Your Feedback to Us</h1>
        <p>
          You assign all rights, title and interest in any Feedback You provide the Company. If for
          any reason such assignment is ineffective, You agree to grant the Company a non-exclusive,
          perpetual, irrevocable, royalty free, worldwide right and licence to use, reproduce,
          disclose, sub-licence, distribute, modify and exploit such Feedback without restriction.
        </p>
        <h1>Links to Other Websites</h1>
        <p>
          Our Service may contain links to third-party web sites or services that are not owned or
          controlled by the Company.
        </p>
        <p>
          The Company has no control over, and assumes no responsibility for, the content, privacy
          policies, or practices of any third party web sites or services. You further acknowledge
          and agree that the Company shall not be responsible or liable, directly or indirectly, for
          any damage or loss caused or alleged to be caused by or in connection with the use of or
          reliance on any such content, goods or services available on or through any such web sites
          or services.
        </p>
        <p>
          We strongly advise You to read the terms and conditions and privacy policies of any
          third-party web sites or services that You visit.
        </p>
        <h1>Termination</h1>
        <p>
          We may terminate or suspend Your Account immediately, without prior notice or liability,
          for any reason whatsoever, including without limitation if You breach these Terms and
          Conditions.
        </p>
        <p>
          Upon termination, Your right to use the Service will cease immediately. If You wish to
          terminate Your Account, You may simply discontinue using the Service.
        </p>
        <h1>Limitation of Liability</h1>
        <p>
          Notwithstanding any damages that You might incur, the entire liability of the Company and
          any of its suppliers under any provision of this Terms and Your exclusive remedy for all
          of the foregoing shall be limited to the amount actually paid by You through the Service
          or 100 USD if You haven't purchased anything through the Service.
        </p>
        <p>
          To the maximum extent permitted by applicable law, in no event shall the Company or its
          suppliers be liable for any special, incidental, indirect, or consequential damages
          whatsoever (including, but not limited to, damages for loss of profits, loss of data or
          other information, for business interruption, for personal injury, loss of privacy arising
          out of or in any way related to the use of or inability to use the Service, third-party
          software and/or third-party hardware used with the Service, or otherwise in connection
          with any provision of this Terms), even if the Company or any supplier has been advised of
          the possibility of such damages and even if the remedy fails of its essential purpose.
        </p>
        <p>
          Some states do not allow the exclusion of implied warranties or limitation of liability
          for incidental or consequential damages, which means that some of the above limitations
          may not apply. In these states, each party's liability will be limited to the greatest
          extent permitted by law.
        </p>
        <h1>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h1>
        <p>
          The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all
          faults and defects without warranty of any kind. To the maximum extent permitted under
          applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and
          their respective licensors and service providers, expressly disclaims all warranties,
          whether express, implied, statutory or otherwise, with respect to the Service, including
          all implied warranties of merchantability, fitness for a particular purpose, title and
          non-infringement, and warranties that may arise out of course of dealing, course of
          performance, usage or trade practice. Without limitation to the foregoing, the Company
          provides no warranty or undertaking, and makes no representation of any kind that the
          Service will meet Your requirements, achieve any intended results, be compatible or work
          with any other software, applications, systems or services, operate without interruption,
          meet any performance or reliability standards or be error free or that any errors or
          defects can or will be corrected.
        </p>
        <p>
          Without limiting the foregoing, neither the Company nor any of the company's provider
          makes any representation or warranty of any kind, express or implied: (i) as to the
          operation or availability of the Service, or the information, content, and materials or
          products included thereon; (ii) that the Service will be uninterrupted or error-free;
          (iii) as to the accuracy, reliability, or currency of any information or content provided
          through the Service; or (iv) that the Service, its servers, the content, or e-mails sent
          from or on behalf of the Company are free of viruses, scripts, trojan horses, worms,
          malware, timebombs or other harmful components.
        </p>
        <p>
          Some jurisdictions do not allow the exclusion of certain types of warranties or
          limitations on applicable statutory rights of a consumer, so some or all of the above
          exclusions and limitations may not apply to You. But in such a case the exclusions and
          limitations set forth in this section shall be applied to the greatest extent enforceable
          under applicable law.
        </p>
        <h1>Governing Law</h1>
        <p>
          The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and
          Your use of the Service. Your use of the Application may also be subject to other local,
          state, national, or international laws.
        </p>
        <h1>Disputes Resolution</h1>
        <p>
          If You have any concern or dispute about the Service, You agree to first try to resolve
          the dispute informally by contacting the Company.
        </p>
        <h1>For European Union (EU) Users</h1>
        <p>
          If You are a European Union consumer, you will benefit from any mandatory provisions of
          the law of the country in which you are resident in.
        </p>
        <h1>United States Legal Compliance</h1>
        <p>
          You represent and warrant that (i) You are not located in a country that is subject to the
          United States government embargo, or that has been designated by the United States
          government as a &quot;terrorist supporting&quot; country, and (ii) You are not listed on
          any United States government list of prohibited or restricted parties.
        </p>
        <h1>Severability and Waiver</h1>
        <h2>Severability</h2>
        <p>
          If any provision of these Terms is held to be unenforceable or invalid, such provision
          will be changed and interpreted to accomplish the objectives of such provision to the
          greatest extent possible under applicable law and the remaining provisions will continue
          in full force and effect.
        </p>
        <h2>Waiver</h2>
        <p>
          Except as provided herein, the failure to exercise a right or to require performance of an
          obligation under this Terms shall not effect a party's ability to exercise such right or
          require such performance at any time thereafter nor shall be the waiver of a breach
          constitute a waiver of any subsequent breach.
        </p>
        <h1>Translation Interpretation</h1>
        <p>
          These Terms and Conditions may have been translated if We have made them available to You
          on our Service. You agree that the original English text shall prevail in the case of a
          dispute.
        </p>
        <h1>Changes to These Terms and Conditions</h1>
        <p>
          We reserve the right, at Our sole discretion, to modify or replace these Terms at any
          time. If a revision is material We will make reasonable efforts to provide at least 30
          days' notice prior to any new terms taking effect. What constitutes a material change will
          be determined at Our sole discretion.
        </p>
        <p>
          By continuing to access or use Our Service after those revisions become effective, You
          agree to be bound by the revised terms. If You do not agree to the new terms, in whole or
          in part, please stop using the website and the Service.
        </p>
        <h1>Contact Us</h1>
        <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
        <ul>
          <li>
            By email:
{' '}
            <a
              href="mailto:support@overlly.com"
              className="__cf_email__"
              data-cfemail="f5868085859a8781b59a83908799998cdb969a98"
            >
              support@overlly.com
            </a>
          </li>
        </ul>
        <script
          data-cfasync="false"
          src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
        />
      </TabPanel>
    </div>
  );
};

export default LegalPage;
