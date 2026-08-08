import React, { useState, useEffect } from "react";
import { FiShield, FiCalendar, FiFileText } from "react-icons/fi";
import SEO from "../components/SEO";
import { privacySeo } from "../data/mainPagesSeoData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getPrivacyPolicy } from "../api/Legal";
import "../styles/LegalPage.css";

const FALLBACK_PRIVACY_CONTENT = `FacilityCore Privacy Policy

Effective Date: July 20, 2026
Last Updated: July 20, 2026

FacilityCore ("FacilityCore", "we", "our", or "us") is committed to protecting the privacy and security of our customers and users. This Privacy Policy explains how we collect, use, store, disclose, and protect personal information and organizational data when you use the FacilityCore web application, mobile application, website, APIs, and related services (collectively, the "Platform").

By accessing or using the Platform, you acknowledge that you have read and understood this Privacy Policy.

1. Scope
This Privacy Policy applies to:
• FacilityCore Web Application
• FacilityCore Mobile Application
• FacilityCore Website
• APIs and Integrations
• Customer Support Services
• Marketing Communications
• Trial Accounts
• Subscription Services

2. Information We Collect

A. Account Information
When you register or subscribe to FacilityCore, we may collect:
• Full Name
• Company Name
• Business Address
• Email Address
• Mobile Number
• Designation
• Country and Time Zone
• Username
• Encrypted Password
• Subscription Details
• Billing Information
• Tax Identification Numbers (if applicable)

B. Organization Data
Your organization may upload or generate information including:
• Property Information
• Building Details
• Asset Registers
• Maintenance Records
• Work Orders
• Inspection Reports
• Preventive Maintenance Checklists
• Inventory Records
• Procurement Records
• Vendor Information
• Contracts
• Budget and Financial Data
• Utility Consumption Data
• Compliance Records
• Incident Reports
• Risk Assessments
• Project Information
• Occupancy Records

This information remains the property of your organization.

C. Employee Information
Depending on the modules you use, FacilityCore may process:
• Employee Name
• Employee ID
• Contact Details
• Department
• Designation
• Attendance Records
• Geo-fenced Attendance Data
• GPS Check-in/Check-out Locations
• Working Hours
• Shift Information
• Leave Records
• Payroll References
• Digital Signatures
• Uploaded Documents

D. Resident, Tenant & Visitor Information
If your organization uses these modules, FacilityCore may process:
• Resident Names
• Apartment or Unit Information
• Contact Information
• Vehicle Details
• Visitor Details
• Visitor Photos (if enabled)
• Entry and Exit Logs
• QR Code Records
• Access Permissions

E. Device Information
We may automatically collect:
• Device Type
• Operating System
• Browser Type
• IP Address
• Language Settings
• Time Zone
• Device Identifier
• App Version
• Network Information

F. Usage Information
We collect information about how the Platform is used, including:
• Login History
• Session Duration
• Pages Visited
• Feature Usage
• Search History
• Error Logs
• Crash Reports
• API Usage
• Performance Metrics

3. Location Information
Certain features require location services, including:
• Geo-Fenced Attendance
• GPS-Based Check-in
• Asset Tracking
• Field Service Activities
• Route Verification

Location information is collected only when the feature is enabled by your organization or you have granted the necessary device permissions.

4. Camera, Microphone & File Access
With your permission, FacilityCore may access:
Camera
To:
• Capture maintenance evidence
• Scan QR Codes
• Scan Barcodes
• Upload asset images
• Capture visitor photographs

Microphone
To:
• Voice-to-text notes
• Audio maintenance observations

File Storage
To:
• Upload documents
• Import spreadsheets
• Export reports
• Store inspection photographs

These permissions are used only for their intended functionality and can be managed through your device settings.

5. How We Use Your Information
We use information to:
• Provide FacilityCore services
• Manage user accounts
• Authenticate users
• Deliver customer support
• Process subscriptions
• Generate reports
• Improve platform performance
• Monitor security
• Detect fraud
• Comply with legal obligations
• Communicate important service updates
• Develop new features
• Improve user experience

6. Benchmarking & Operational Analytics (Optional)
FacilityCore offers an optional benchmarking program designed to help customers improve operational performance.
If your organization chooses to participate, you authorize FacilityCore to process selected high-level operational metrics, such as:
• Number of properties
• Number of buildings
• Total built-up area
• Number of residential or commercial units
• Asset counts by category
• Preventive maintenance completion rates
• Corrective maintenance response and resolution times
• Work order volumes
• Asset downtime statistics
• Cleaning performance indicators
• Compliance completion rates
• Helpdesk performance
• Utility consumption summaries
• Inventory utilization
• Vendor performance metrics
• SLA achievement rates
• Workforce productivity indicators
• Platform feature adoption

FacilityCore uses this information to:
• Generate anonymized industry benchmarks
• Provide operational comparisons
• Deliver maintenance optimization recommendations
• Suggest asset lifecycle improvements
• Recommend technical best practices
• Identify opportunities for operational efficiency
• Provide customer success guidance
• Improve product functionality

Participation is completely voluntary and can be enabled or disabled at any time from your account settings.
FacilityCore does not include your organization's identity in aggregated benchmarking reports without your explicit consent.

7. Artificial Intelligence (AI)
FacilityCore may use artificial intelligence, machine learning, predictive analytics, and rule-based algorithms to provide:
• Maintenance recommendations
• Predictive maintenance alerts
• Asset health analysis
• Operational insights
• Energy optimization suggestions
• Cleaning optimization
• Inventory forecasting
• Budget forecasting
• Compliance recommendations
• Workforce productivity insights

AI-generated outputs are advisory only and should not replace professional judgment or regulatory compliance requirements.

8. Cookies & Similar Technologies
FacilityCore uses cookies and similar technologies to:
• Maintain user sessions
• Remember preferences
• Improve performance
• Enhance security
• Measure application usage
• Support analytics

You may disable cookies in your browser; however, some features may not function properly.

9. Data Sharing
FacilityCore does not sell your personal information.
We may share information only with:
• Cloud infrastructure providers
• Payment processors
• Email and SMS service providers
• Customer support providers
• Authentication providers
• Analytics providers
• Government authorities when legally required
• Professional advisers (such as auditors or legal counsel) under confidentiality obligations

All service providers are required to protect your information and use it only for the services they provide to FacilityCore.

10. International Data Transfers
Your information may be processed or stored in secure data centers located in different countries depending on your selected hosting region or our infrastructure providers.
Where required, FacilityCore will implement appropriate safeguards for international data transfers in accordance with applicable data protection laws.

11. Data Security
FacilityCore implements industry-standard security measures including:
• HTTPS/TLS encryption
• Encryption of sensitive data at rest where appropriate
• Role-Based Access Control (RBAC)
• Multi-factor authentication (where enabled)
• Password hashing
• Security monitoring
• Audit logging
• Regular backups
• Disaster recovery procedures
• Network firewalls
• Malware protection
• Vulnerability assessments

While we employ reasonable safeguards, no system connected to the internet can be guaranteed to be completely secure.

12. Data Retention
We retain information:
• While your subscription remains active
• For the period necessary to provide services
• To meet legal, tax, accounting, or regulatory obligations
• To resolve disputes and enforce agreements

Following account closure, data may be deleted or anonymized after the applicable retention period, unless otherwise required by law or agreed in writing.

13. Your Privacy Rights
Subject to applicable law, you may have the right to:
• Access your personal information
• Correct inaccurate information
• Update account information
• Delete personal information where permitted
• Export your data
• Restrict certain processing
• Withdraw optional consents, including participation in benchmarking
• Object to certain processing activities
• Lodge a complaint with a relevant data protection authority

Requests may be submitted through your account administrator or by contacting FacilityCore.

14. Customer Responsibilities
Organizations using FacilityCore are responsible for:
• Obtaining any required employee, resident, tenant, or visitor notices or consents
• Managing user permissions
• Maintaining accurate information
• Configuring access rights appropriately
• Complying with applicable privacy and employment laws

15. Children's Privacy
FacilityCore is intended for business and organizational use and is not directed to children under the age of 18. We do not knowingly collect personal information directly from children.

16. Third-Party Services
FacilityCore may integrate with third-party services such as:
• Google Maps
• Firebase
• Microsoft Services
• Google Workspace
• Payment Gateways
• SMS Providers
• Email Providers
• Cloud Storage Providers

Your use of these integrations may also be subject to the privacy policies of those third-party providers.

17. Business Transfers
If FacilityCore undergoes a merger, acquisition, investment, restructuring, or sale of assets, customer information may be transferred as part of the transaction, subject to appropriate confidentiality and security obligations.

18. Changes to this Privacy Policy
We may update this Privacy Policy from time to time to reflect changes in our services, technology, or legal requirements.
Where required, we will notify customers of material changes through the Platform, email, or other appropriate communication channels. Continued use of the Platform after the effective date of the updated policy constitutes acceptance of the revised Privacy Policy.

19. Contact Us
If you have questions, concerns, or requests regarding this Privacy Policy or the way your information is handled, please contact:
FacilityCore Privacy Office
Email: privacy@facilitycore.in
Support: support@facilitycore.in
Website: https://facilitycore.in

20. Consent
By creating an account or using FacilityCore, you acknowledge that:
• You have read and understood this Privacy Policy.
• You consent to the collection, use, storage, and processing of your information as described herein.
• You understand that participation in the optional Benchmarking & Operational Analytics program requires separate consent and may be withdrawn at any time without affecting your ability to use the core FacilityCore services.`;

const formatInlineText = (text) => {
  if (!text) return "";

  // 1. Pre-sanitize text to strip markdown bold stars wrapped around links, URLs, or emails
  let cleanText = text
    .replace(/\*\*\s*(\[[^\]]+\]\([^)]+\))\s*\*\*/g, "$1")
    .replace(/\*\*\s*(https?:\/\/[^\s*]+)\s*\*\*/g, "$1")
    .replace(/\*\*\s*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\s*\*\*/g, "$1");

  // 2. Parse markdown links [label](url) first
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(cleanText)) !== null) {
    const [fullMatch, label, url] = match;
    const startIndex = match.index;

    if (startIndex > lastIndex) {
      parts.push(cleanText.substring(lastIndex, startIndex));
    }

    const isMail = url.startsWith("mailto:");
    const cleanUrl = isMail ? url.replace(/^mailto:/, "") : url;
    parts.push(
      <a
        key={`mdlink-${startIndex}`}
        href={isMail ? `mailto:${cleanUrl}` : url}
        className="legal-link"
        target={isMail ? "_self" : "_blank"}
        rel={isMail ? undefined : "noopener noreferrer"}
      >
        {label}
      </a>
    );

    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < cleanText.length) {
    parts.push(cleanText.substring(lastIndex));
  }

  // 3. For string parts, parse inline bold **text** or remaining URLs/emails
  return parts.map((part, pIdx) => {
    if (typeof part !== "string") return part;

    const boldRegex = /\*+([^*]+)\*+/g;
    const subParts = [];
    let subLastIndex = 0;
    let boldMatch;

    while ((boldMatch = boldRegex.exec(part)) !== null) {
      const [bFull, bText] = boldMatch;
      const bStart = boldMatch.index;

      if (bStart > subLastIndex) {
        subParts.push(part.substring(subLastIndex, bStart));
      }

      subParts.push(
        <strong key={`b-${bStart}`} className="legal-bold">
          {bText}
        </strong>
      );

      subLastIndex = boldRegex.lastIndex;
    }

    if (subLastIndex < part.length) {
      subParts.push(part.substring(subLastIndex));
    }

    // Strip any remaining lone asterisks in text nodes
    return subParts.map((subPart, sIdx) => {
      if (typeof subPart !== "string") return subPart;

      const sanitizedSub = subPart.replace(/\*/g, "");
      if (!sanitizedSub) return null;

      // Auto-link standalone URLs or Emails
      const urlEmailRegex = /(https?:\/\/[^\s<]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
      const finalElements = [];
      let fLastIndex = 0;
      let fMatch;

      while ((fMatch = urlEmailRegex.exec(sanitizedSub)) !== null) {
        const [fFull] = fMatch;
        const fStart = fMatch.index;

        if (fStart > fLastIndex) {
          finalElements.push(sanitizedSub.substring(fLastIndex, fStart));
        }

        const isEmail = fFull.includes("@") && !fFull.startsWith("http");
        const href = isEmail ? `mailto:${fFull}` : fFull;

        finalElements.push(
          <a
            key={`autolink-${fStart}`}
            href={href}
            className="legal-link"
            target={isEmail ? "_self" : "_blank"}
            rel={isEmail ? undefined : "noopener noreferrer"}
          >
            {fFull}
          </a>
        );

        fLastIndex = urlEmailRegex.lastIndex;
      }

      if (fLastIndex < sanitizedSub.length) {
        finalElements.push(sanitizedSub.substring(fLastIndex));
      }

      return <React.Fragment key={`sub-${pIdx}-${sIdx}`}>{finalElements}</React.Fragment>;
    });
  });
};

const renderContent = (rawText) => {
  if (!rawText) return null;
  const lines = rawText.split("\n");
  const elements = [];
  let currentList = [];

  const flushList = (key) => {
    if (currentList.length > 0) {
      elements.push(
        <ul className="legal-ul" key={`${key}-list`}>
          {currentList.map((item, idx) => (
            <li className="legal-li" key={idx}>
              {item}
            </li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList(idx);
      return;
    }

    if (trimmed.startsWith("•") || trimmed.startsWith("*")) {
      const itemText = trimmed.replace(/^[•*]\s*/, "");
      currentList.push(formatInlineText(itemText));
      return;
    }

    flushList(idx);

    const cleanLine = trimmed.replace(/^\*+\s*/, "").replace(/\*+$/, "");

    if (/^\d+\.\s+/.test(trimmed) || /^[A-Z\s]{4,}$/.test(trimmed)) {
      elements.push(
        <h2 className="legal-h2" key={idx}>
          {formatInlineText(cleanLine)}
        </h2>
      );
    } else if (/^[A-Z]\.\s+/.test(trimmed)) {
      elements.push(
        <h3 className="legal-h3" key={idx}>
          {formatInlineText(cleanLine)}
        </h3>
      );
    } else {
      elements.push(
        <p className="legal-paragraph" key={idx}>
          {formatInlineText(trimmed)}
        </p>
      );
    }
  });

  flushList("end");
  return elements;
};

const PrivacyPage = () => {
  const [content, setContent] = useState(FALLBACK_PRIVACY_CONTENT);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const fetchDoc = async () => {
      try {
        const res = await getPrivacyPolicy();
        if (res && res.content && active) {
          setContent(res.content);
        }
      } catch (err) {
        console.error("Failed to fetch Privacy Policy from API:", err);
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchDoc();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="legal-page-wrapper">
      <SEO
        title="Privacy Policy & Data Security Terms | FacilityCore"
        description="Read the official FacilityCore Privacy Policy to learn how we handle personal information, protect customer data, and maintain strict security standards."
        keywords="facilitycore privacy policy, platform data security, user privacy compliance"
      />
      <Navbar />

      {/* Hero Header */}
      <section className="legal-hero">
        <div className="legal-hero-container">
          <div className="legal-badge">
            <FiShield /> LEGAL DOCKET
          </div>
          <h1 className="legal-title">Privacy Policy</h1>
          <div className="legal-meta">
            <div className="legal-meta-item">
              <FiCalendar className="legal-meta-icon" />
              <span>Last Updated: July 20, 2026</span>
            </div>
            <span className="legal-meta-dot">•</span>
            <div className="legal-meta-item">
              <FiFileText className="legal-meta-icon" />
              <span>Official Document</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="legal-content-section">
        <div className="legal-container">
          {loading ? (
            <div className="legal-loading">
              <div className="legal-spinner" />
              <span>Loading latest privacy policy...</span>
            </div>
          ) : (
            <div className="legal-body">{renderContent(content)}</div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
