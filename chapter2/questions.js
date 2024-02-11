let questions = [
  {
    numb: 1,
    question:
      "Your organization wants to identify biometric methods used for identification.The requirements are: (1) Collect the data passively (2) Bypass a formal enrollment proces. (3) Avoid obvious methods that let the subject know data is being collected. Which of the following biometric methods BEST meet these requirements? (Select TWO)",
    answer: ["D. Facial", "F. Gait analysis"],
    explanation:
      "It's possible to collect facial scan data and perform gait analysis without an enrollment process. You would use cameras to observe subjects from a distance and collect data passively. You need a formal enrollment process for fingerprints, retinas, irises, and palm vein methods. Retina and iris scans need to be very close to the eye and are very obvious. Palm vein methods require users to place their palm on a scanner. While it's possible to collect fingerprints passively, you still need an enrollment process",
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
    explanation:
      "This is using one-factor authentication—something you know. The application uses the username for identification and the password for authentication. Note that even though the application is logging the location using Global Positioning System (GPS), there isn't any indication that it is using this information for authentication. Dual-factor authentication requires another factor of authentication such as something you are or something you have. Something you are authentication factor refers to biometric authentication methods. The something you have authentication factor refers to something you can hold, such as a smart card.",
    options: [
      "A. One-factor",
      "B. Dual-factor",
      "C. Something you are",
      "D. Something you have",
    ],
  },
  {
    numb: 3,
    question:
      "Management within your organization wants to add 2FA security for users working from home. Additionally, management wants to ensure that 2FA passwords expire after 30 seconds. Which of the following choice BEST meets this requirement?",
    answer: "B. TOTP",
    explanation:
      "A Time-based One-Time Password (TOTP) meets the requirement of two-factor authentication (2FA). A user logs on with regular credentials (such as a username and password), and then must enter an additional one-time password. Some smartphone apps use HOTP and display a new password every 30 seconds. An HMAC-based One-Time Password (HOTP) creates passwords that do not expire until they are used. Short message service (SMS) is sometimes used to send users a one-time use password via email or a messaging app, but these passwords typically don't expire until at least 15 minutes later. Kerberos uses tickets instead of passwords.",
    options: ["A. HOTP", "B. TOTP", "C. SMS", "D. Kerberos"],
  },
  {
    numb: 4,
    question:
      "Management within your organization has decided to implement a biometric solution for authentication into the data center. They have stated that the biometric system needs to be highly accurate. Which of the following provides the BEST indication of accuracy with a biometric system?",
    answer: "C. The lowest possible CER",
    explanation:
      "A lower crossover error rate (CER) indicates a more accurate biometric system. The false acceptance rate (FAR) and the false rejection rate (FRR) vary based on the sensitivity of the biometric system and don't indicate accuracy by themselves. A higher CER indicates a less accurate biometric system.",
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
    explanation:
      "A vein scan implemented with a palm scanner would be the best solution for the available choices. The patient would place their palm on the scanner for biometric identification, or if the patient is unconscious, medical personnel can place the patient's palm on the scanner. None of the other biometric methods can be easily performed on an unconscious patient. Gait analysis attempts to identify someone based on the way they walk. A retina scan scans the retina of an eye, but this will be difficult if someone is unconscious. Voice recognition identifies a person using speech recognition.",
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
    explanation:
      "Push notifications are user-friendly and non-disruptive. Users receive a notification on a smartphone and can often acknowledge it by simply pressing a button. An authentication application isn't as user-friendly as a push notification. It requires users to log on to the smartphone, find the app, and enter the code. A Trusted Platform Module (TPM)provides full drive encryption and would protect the data if someone accessed the laptop, but it doesn't prevent access. A hardware security module (HSM) is a removable device that can generate and store RSA keys used with servers. Neither a TPM nor an HSM is relevant in this question.",
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
    explanation:
      "Time-of-day restrictions should be implemented to ensure that temporary workers can only access network resources during work hours. The other answers represent good practices, but don't address the need stated in the question that “personnel need access to network resources, but only during working hours.” Account expiration should be implemented if the organization knows the last workday of these workers. Account lockout will lock out an account if the wrong password is entered too many times. Password recovery allows users to recover a forgotten password or change their password if they forgot their password. Password history remembers previously used passwords and helps prevent users from using the same password.",
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
    explanation:
      "A user account is the best choice of the available answers. More specifically, it would be a user account with administrative privileges (also known as a privileged account) so that the administrator can add the domain controller. A generic account (also known as a shared account) is shared between two or more users and is not recommended. A guest account is disabled by default and it is not appropriate to grant the guest account administrative privileges. A service account is an account created to be used by a service or application, not a person.",
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
    explanation:
      "Removing all shared accounts is the best answer of the available choices. If two employees are using the same account, and one employee maliciously deletes data in a database, it isn't possible to identify which employee deleted the data. Generic accounts are the same as shared accounts and shouldn't be used. Role-based (or group-based) privileges assign the same permissions to all members of a group, which simplifies administration. A single sign-on (SSO) solution allows a user to log on once and access multiple resources.",
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
    explanation:
      "The best response is to disable the accounts and then enable them when needed by the contractors. Ideally, the accounts would include an expiration date so that they would automatically expire when no longer needed, but the scenario doesn't indicate the accounts have an expiration date. Because the contractors need to access the accounts periodically, it's better to disable them rather than delete them. Resetting the accounts implies you are changing the password, but this isn't needed.",
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
    explanation:
      "Kerberos is the best choice of the available answers. Users claim an identity with a username for identification and prove their identity with a password for authentication. Kerberos uses a ticket-granting ticket (TGT) server for authentication and incorporates the user credentials in tickets. Users only have to sign in once with Kerberos, providing single sign-on (SSO). OpenID is an open-source standard used for authentication on the Internet, not internal networks. Security Assertion Markup Language (SAML) is an XML-based standard that provides SSO for web-based applications. Remote Authentication Dial-In User Service (RADIUS) is an authentication service that provides central authentication for remote access clients.",
    options: ["A. OpenID", "B. SAML", "C. Kerberos", "D. RADIUS"],
  },
  {
    numb: 12,
    question:
      "Web developers in your organization are creating a web application that will interact with other applications running on the Internet. They want their application to receive user credentials from an app running on a trusted partner’s web domain. Which of the following is the BEST choice to meet this need?",
    answer: "B. SAML 2",
    explanation:
      "Security Assertion Markup Language (SAML) is a single sign-on SSO solution used for web-based applications and would meet this requirement. All SSO solutions are not used on the Internet, so SSO isn't the best answer. Kerberos is an SSO solution used on internal network ssuch as in Microsoft Active Directory domains and Unix realms. Remote Authentication Dial-In User Service (RADIUS) provides authentication, authorization, and accounting (AAA) services for some remote access and wireless network solutions.",
    options: ["A. SSO 2", "B. SAML 2", "C. Kerberos 2", "D. RADIUS 4"],
  },
  {
    numb: 13,
    question:
      "Artie has been working at Ziffcorp as an accountant. However, after a disagreement with his boss, he decides to leave the company and gives a two-week notice. He has a user account allowing him to access network resources. Which of the following is the MOST appropriate step to take?",
    answer: "D. Ensure his account is disabled during his exit interview",
    explanation:
      "His account should be disabled (or deleted if that is the company policy) during the exit interview. It's appropriate to conduct an exit interview immediately before an employee departs. Employees often give a two-week or longer notice. If their access is revoked immediately, they won't be able to do any more work. While some companies do terminate employment when someone gives notice, from a security perspective, that doesn't address the needed action related to the user account. The purpose of a mandatory vacation is to detect fraud, but if the employee is leaving, any potential fraud will be detected when that employee leaves.",
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
    explanation:
      "Group-based privileges are a form of role-based access control and they simplify administration. Instead of assigning permissions to new employees individually, you can just add new employee user accounts into the appropriate groups to grant them the rights and permissions they need for the job. User-assigned privileges require you to manage privileges for each user separately, and they increase the account administration burden. Domain-assigned and network-assigned privileges are not valid administration practices.",
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
    explanation:
      "The role-based access control (role-BAC) scheme is the best choice for assigning access based on job functions. A discretionary access control (DAC) scheme specifies that every object has an owner and owners have full control over objects, but it isn't related to job functions. A mandatory access control (MAC) scheme uses labels and a lattice to grant access rather than job functions. A rule-based access control (rule-BAC)scheme uses rules that trigger in response to events.",
    options: [
      "A. Discretionary access control",
      "B. Mandatory access control",
      "C. Role-based access control",
      "D. Rule-based access control",
    ],
  },
];
