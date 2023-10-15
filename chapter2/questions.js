let questions = [
  {
    numb: 1,
    question:
      "Your organization wants to identify biometric methods used for identification.The requirements are: (1)Collect the data passively (2)Bypass a formal enrollment proces. (3)Avoid obvious methods that let the subject know data is being collected. Which of the following biometric methods BEST meet these requirements? (Select TWO)",
    answer: ["D. Facial", "F. Gait analysis"],
    options: [
      "A. Fingerprint",
      "B. Retina",
      "C. Iris",
      "D. Facial",
      "E. Palm vien",
      "F. Gait analysis",
    ],
    numAnswersToSelect: 2,
  },
  {
    numb: 2,
    question:
      "Your organization recently updated an online application that employees use to log on when working from home. Employees enter their username and password into the application from their smartphone, and the application logs their location using GPS. Which type of authentication is being used?",
    answer: "A. One-factor",
    options: [
      "A. One-factor",
      "B. Dual-facor",
      "C. Something you are",
      "D. Something you have",
    ],
  },
  {
    numb: 3,
    question:
      "Management within your organization wants to add 2FA security for users working from home. Additionally, management wants to ensure that 2FA passwords expire after 30 seconds. Which of the following choice BEST meets this requirement?",
    answer: "B. TOTP",
    options: ["A. HOTP", "B. TOTP", "C. SMS", "D. Kerberos"],
  },
  {
    numb: 4,
    question:
      "Management within your organization has decided to implement a biometric solution for authentication into the data center. They have stated that the biometric system needs to be highly accurate. Which of the following provides the BEST indication of accuracy with a biometric system?",
    answer: "C. The lowest possible CER",
    options: [
      "A. the lowest possible FRR",
      "B. The highest possible FAR",
      "C. The lowest possible CER",
      "D. The highest possible CER",
    ],
  },
  {
    numb: 5,
    question:
      "The Marvin Monroe Memorial Hospital was recently sued after removing a kidney from the wrong patient. Hospital executives want to implement a method that will reduce medical errors related to misidentifying patients. They want to ensure medical personnel can identify a patient even if the patient is unconscious. Which of the following would be the BEST solution?",
    answer: "B. Vein scans",
    options: [
      "A. Gait analysis",
      "B. Vein scans",
      "C. Retina scan",
      "D. Voice recognition",
    ],
  },
  {
    numb: 6,
    question:
      "Users regularly log on with a username and password. However, management wants to add a second authentication factor for any users who launch the gcga application. The method needs to be user-friendly and non-disruptive. Which of the following will BEST meet these requirements?",
    answer: "D. Push notifications",
    options: [
      "A. An authentication application",
      "B. TPM",
      "C. HSM",
      "D. Push notifications",
    ],
  },
  {
    numb: 7,
    question:
      "Your organization hires students during the summer for temporary help. They need access to network resources, but only during working hours. Management has stressed that it is critically important to safeguard trade secrets and other confidential information. Which of the following account management concepts would be MOST important to meet these goals?",
    answer: "C. Time-of-day restrictions",
    options: [
      "A. Account expiration",
      "B. Account lockout",
      "C. Time-of-day restrictions",
      "D. Password recovery",
      "E. Password history",
    ],
  },
  {
    numb: 8,
    question:
      "You need to provide a junior administrator with appropriate credentials to rebuild a domain controller after it suffers a catastrophic failure. Of the following choices, what type of account would BEST meet this need?",
    answer: "A. User account",
    options: [
      "A. User account",
      "B. Generic account",
      "C. Guest account",
      "D. Service account",
    ],
  },
  {
    numb: 9,
    question:
      "Lisa is reviewing an organization’s account management processes. She wants to ensure that security log entries accurately report the identity of personnel taking specific actions. Which of the following steps would BEST meet this requirement?",
    answer: "D. Remove all shared accounts",
    options: [
      "A. Implement generic accounts",
      "B. Implement role-based privileges",
      "C. Use an SSO solution",
      "D. Remove all shared accounts",
    ],
  },
  {
    numb: 10,
    question:
      "A recent security audit discovered several apparently dormant user accounts. Although users could log on to the accounts, no one had logged on to them for more than 60 days. You later discovered that these accounts are for contractors who work approximately one week every quarter. Which of the following is the BEST response to this situation?",
    answer: "D. Disable the accounts",
    options: [
      "A. Remove the account expiration from the accounts",
      "B. Delete the accounts",
      "C. Reset the accounts",
      "D. Disable the accounts",
    ],
  },
  {
    numb: 11,
    question:
      "An administrator is implementing a network from scratch for a medical office. The owners want to have strong authentication and authorization to protect the privacy of data on all internal systems. They also want regular employees to use only a single username and password for all network access. Which of the following is the BEST choice to meet these needs?",
    answer: "C. Kerberos",
    options: ["A. OpenID", "B. SAML", "C. Kerberos", "D. RADIUS"],
  },
  {
    numb: 12,
    question:
      "Web developers in your organization are creating a web application that will interact with other applications running on the Internet. They want their application to receive user credentials from an app running on a trusted partner’s web domain. Which of the following is the BEST choice to meet this need?",
    answer: "B. SAML 2",
    options: ["A. SSO 2", "B. SAML 2", "C. Kerberos 2", "D. RADIUS 4"],
  },
  {
    numb: 13,
    question:
      "Artie has been working at Ziffcorp as an accountant. However, after a disagreement with his boss, he decides to leave the company and gives a two-week notice. He has a user account allowing him to access network resources. Which of the following is the MOST appropriate step to take?",
    answer: "D. Ensure his account is disabled during his exit interview",
    options: [
      "A. Ensure his account is disabled when he announces that he will be leaving the company",
      "B. Immediately terminate his employment",
      "C. Force him to take a mandatory vacation",
      "D. Ensure his account is disabled during his exit interview",
    ],
  },
  {
    numb: 14,
    question:
      "You administer access control for users in your organization. Some departments have a high employee turnover, so you want to simplify account administration. Which of the following is the BEST choice?",
    answer: "B. Group-based privileges",
    options: [
      "A. User-assigned privileges",
      "B. Group-based privileges",
      "C. Domain-assigned privileges",
      "D. Network-assigned privileges",
    ],
  },
  {
    numb: 15,
    question:
      "An administrator needs to grant users access to different shares on file servers based on their job functions. Which of the following access control schemes would BEST meet this need?",
    answer: "C. Role-based access control",
    options: [
      "A. Discretionary access control",
      "B. Mandatory access control",
      "C. Role-based access control",
      "D. Rule-based access control",
    ],
  },
];
