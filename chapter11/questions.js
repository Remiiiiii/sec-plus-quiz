let questions = [
  {
    numb: 1,
    question:
      "Management within your organization wants to ensure that users understand the rules of behavior when they access the organization's systems and networks. Which of the following BEST describes what they would implement to meet this requirement?",
    answer: "A. AUP",
    explanation:
      "An acceptable use policy (AUP) informs users of company expectations when they use computer systems and networks, and it defines acceptable rules of behavior. A non-disclosure agreement (NDA) ensures that individuals do not share proprietary data with others. A service level agreement (SLA) is an agreement between a company and a vendor that stipulates performance expectations, such as minimum uptime and maximum downtime levels. A measurement systems analysis (MSA)evaluates the processes and tools used to make measurements.",
    options: ["A. AUP", "B. NDA", "C. SLA", "D. MSA"],
  },
  {
    numb: 2,
    question:
      "Management recently decided to upgrade the organization's security policy. Among other items, they want to implement a policy that will reduce the risk of personnel within the organization colluding to embezzle company funds. Which of the following is the BEST choice to meet this need?",
    answer: "C. Mandatory vacations",
    explanation:
      "Mandatory vacations help to reduce the possibility of fraud and embezzlement. An acceptable use policy informs users of company policies, and even though users sign them, they don't deter someone considering theft by embezzling funds. Training can help reduce incidents by ensuring personnel are aware of appropriate policies. A background check is useful before hiring employees, but it doesn't directly reduce risk related to employees colluding to embezzle funds.",
    options: [
      "A. AUP",
      "B. Training",
      "C. Mandatory vacations",
      "D. Background check",
    ],
  },
  {
    numb: 3,
    question:
      "Lisa is a training instructor, and she maintains a training lab with 16 computers. She has enough rights and permissions on these machines to configure them as needed for classes. However, she does not have the right to add them to the organization's domain. Which of the following choices best describes the reasoning for this?",
    answer: "A. Least privilege",
    explanation:
      "When following the principle of least privilege, individuals have only enough rights and permissions to perform their jobs. Lisa needs to maintain the training lab, but there is no indication she needs to join the training lab computers to the domain. A measurement systems analysis(MSA) uses various methods to identify variations within a measurement process and is completely unrelated to this question. Diversity of training techniques refers to using different training techniques for end users. Offboarding is the process of removing employees' access when they leave the company but has nothing to do with the privileges of a training instructor.",
    options: [
      "A. Least privilege",
      "B. MSA",
      "C. Diversity of training",
      "D. Offboarding",
    ],
  },
  {
    numb: 4,
    question:
      "Your organization includes a software development division within the IT department. One developer writes and maintains applications for the sales and Marketing departments. A second developer writes and maintains applications for the Payroll department. Once a year, they switch roles for at least a month. What is the purpose of this practice?",
    answer: ["C. To enforce a job rotation policy"],
    explanation:
      "This practice enforces a job rotation policy where employees rotate into different jobs, and it is designed to reduce potential incidents. A separation of duties policy prevents any single person from performing multiple job functions to help prevent fraud, but it doesn't force users to switch roles. A mandatory vacation policy requires employees to take time away from their jobs. An acceptable use policy informs users of their responsibilities when using an organization's equipment.",
    options: [
      "A. To enforce a separation of duties policy",
      "B. To enforce a mandatory vacation policy",
      "C. To enforce a job rotation policy",
      "D. To enforce an acceptable use policy",
    ],
  },
  {
    numb: 5,
    question:
      "Your organization recently suffered a costly malware attack. Management wants to take steps to prevent damage from malware in the future. Which of the following phases of common incident response procedures is the BEST phase to address this?",
    answer: "A. Preparation",
    explanation:
      "The preparation phase is the first phase of common incident response procedures and attempts to prevent security incidents. Incident identification occurs after a potential incident occurs and verifies it is an incident. Containment attempts to limit the damage by preventing an incident from spreading, but it doesn't prevent the original incident. Eradication attempts to remove all malicious elements of an incident after it has been contained. All six steps in order are preparation, identification, containment, eradication, recovery, and lessons learned.",
    options: [
      "A. Preparation",
      "B. Identification",
      "C. Containment",
      "D. Eradication",
    ],
  },
  {
    numb: 6,
    question:
      "An incident response team is following typical incident response procedures. Which of the following phases is the BEST choice for analyzing an incident to identify steps to prevent a reoccurrence of the incident?",
    answer: "D. Lessons learned",
    explanation:
      "You should analyze an incident during the lessons learned phase of incident response to identify steps to prevent reoccurrence. Preparation is a planning step done before an incident, to prevent incidents and identify methods to respond to incidents. Identification is the first step after hearing about a potential incident to verify it is an incident. Eradication attempts to remove all malicious elements of an incident after containing it.",
    options: [
      "A. Preparation",
      "B. Identification",
      "C. Eradication",
      "D. Lessons learned",
    ],
  },
  {
    numb: 7,
    question:
      "After a recent cybersecurity incident resulting in a significant loss, your organization decided to create a security policy for incident response. Which of the following choices is the BEST choice to include in the policy when an incident requires confiscation of a physical asset?",
    answer:
      "C. Keep a record of everyone who took possession of the physicalasset",
    explanation:
      "It's important to keep a chain of custody for any confiscated physical items, and the chain of custody is a record of everyone who took possession of the asset after it was first confiscated. Hashes should be taken before capturing an image of a disk, but hashes are not required before confiscating equipment. Security personnel should be aware of the order of volatility and protect volatile data, but there isn't any way to maintain the order of volatility. It's important to perform interviews with anyone who observed the incident, but it isn't necessary to interview people who were present when the asset is confiscated.",
    options: [
      "A. Ensure hashes are taken first",
      "B. Maintain the order of volatility",
      "C. Keep a record of everyone who took possession of the physical asset",
      "D. Require interviews of all witnesses present when the asset is confiscated",
    ],
  },
  {
    numb: 8,
    question:
      "A forensic analyst was told of a suspected attack on a Virginia-based webserver from IP address 72.52.230.233 at 01:23:45 GMT. However, after investigating the logs, he didn't see any traffic from that IP at that time. Which of the following is the MOST likely reason why the analyst was unable to identify the traffic?",
    answer: "A. He did not account for the time offset",
    explanation:
      "The most likely reason is that he did not account for the time offset. The attack occurred at 01:23:45 Greenwich Mean Time (GMT), which is the same time in London (except when daylight savings time starts). The web server is in the Eastern Standard Time (EST) zone in Virginia, which is five hours different from GMT. There is no need to capture an image to view logs. IP addresses on the Internet do not expire. Logs are written to a hard drive or a central location; they are not erased when a system is rebooted.",
    options: [
      "A. He did not account for the time offset",
      "B. He did not capture an image",
      "C. The IP address has expired",
      "D. The logs were erased when the system was rebooted.",
    ],
  },
  {
    numb: 9,
    question:
      "Homer called the help desk complaining his computer was giving random errors. Cybersecurity professionals suspect his system is infected with malware and decide to use digital forensic methods to acquire data on his system. Which of the following should be collected before turning the system off? (Choose TWO.)",
    answer: ["B. RAM", "E. Cache"],
    explanation:
      "Random access memory (RAM) and cache are the most volatile of the items listed and should be collected before the system is turned off. You can collect an image of the disk and the operating system(OS) after it is powered off. Read-only memory (ROM) will be retained even when the power is removed. While the swap/pagefile is not listed, it should also be collected. If the system is turned back on after it is turned off, the swap/pagefile will be overwritten.",
    options: ["A. Image of disk", "B. RAM", "C. OS", "D. ROM", "E. Cache"],
    numAnswersToSelect: 2,
  },
  {
    numb: 10,
    question:
      "After a recent incident, a forensic analyst was given several hard drives to analyze. Which of the following actions should she take FIRST?",
    answer: "B. Take hashes for provenance",
    explanation:
      "Forensic analysts take hashes to prove the provenance of the copy. The hash (or checksum) provides proof that the copy is the same as the original and has not lost integrity. A drive image shouldn't be captured before creating a hash, and just having a drive image doesn't provide integrity or prove that it is the same as the original. Reviewing any data on an original disk will potentially modify the data so it shouldn't be done. A chain of custody document is created when evidence is collected, so it should already exist.",
    options: [
      "A. Capture drive images for integrity",
      "B. Take hashes for provenance",
      "C. Review the logs on the disks",
      "D. Create a chain of custody document.",
    ],
  },
  {
    numb: 11,
    question:
      "A healthcare organization manages several hospitals and medical facilities within a state, and they have treated thousands of patients who have suffered from a recent viral outbreak. Doctors from another state are performing studies of this virus and would like to access the information that the health care organization has amassed. Management has authorized the release of this information but has mandated that the data cannot reveal any personal information about patients. Which of the following methods will BEST meet these requirements?",
    answer: "D. Masking",
    explanation:
      "Data masking will modify the original data and can be used to hide Personally Identifiable Information (PII). In this scenario, data masking could modify names, addresses, and phone numbers, while retaining medical data such as treatments and outcomes. Although not available as a choice, anonymization of the data could also meet the requirements. Pseudo-anonymization replaces some data with pseudonyms or artificial identifiers, but the process can be reversed to identify the original data, so it isn't the best choice. Tokenization replaces data elements with a token, and the token is then used in place of the original data element. Tokenization doesn't protect identities. Encryption would convert cleartext into ciphertext making everything unusable by the outside researchers.",
    options: [
      "A. Pseudo-anonymization",
      "B. Tokenization",
      "C. Encryption",
      "D. Masking",
    ],
  },
  {
    numb: 12,
    question:
      "An urban hospital has recently treated hundreds of patients after a viral outbreak. Researchers trying to learn more about the virus have asked the hospital for information on treatment methods they used and their outcomes. The hospital management has asked the IT department to remove all personal information about patients before releasing this data. Which of the following methods will BEST meet these requirements?",
    answer: "A. Anonymization",
    explanation:
      "Anonymization of the data would modify it to hide personally Identifiable Information (PII) and is the best choice of the available options. Although not available as a choice, data masking could also meet the requirements. Pseudo-anonymization replaces some data with pseudonyms or artificial identifiers, but the process can be reversed to identify the original data, so it isn't the best choice. Tokenization doesn't protect identities but instead replaces data elements with a token, and the token can then be used in place of the original data element. Data minimization refers to data collection and requires organizations to limit the data they collect and use.",
    options: [
      "A. Anonymization",
      "B. Pseudo-anonymization",
      "C. Tokenization",
      "D. Data minimization",
    ],
  },
  {
    numb: 13,
    question:
      "Investigations have shown that several recent security incidents originated after employees responded inappropriately to malicious emails. The IT department has sent out multiple emails describing what to do with these emails, but employees continue to respond inappropriately. The chief information officer has directed the Human Resources department to find and implement a solution that will increase user awareness and reduce these incidents. Which of the following would be the BEST solution?",
    answer: "C. Gamification",
    explanation:
      "Gamification uses various techniques to increase employee interaction, participation, and understanding of topics. This scenario indicates employees are responding to phishing emails and the IT department has been unsuccessful in getting them to respond to phishing emails appropriately. Offboarding is the process of removing an employee when they leave the company but firing employees isn't the best choice here. A principle of least privilege ensures employees have only enough rights and permissions to perform their jobs and can temporarily limit an attacker's access after a successful phishing attack, but it won't prevent an employee's actions. Role-based training gives users specific training based on their role, but this scenario doesn't indicate the problem is limited to any role.",
    options: [
      "A. Offboarding",
      "B. Least privilege",
      "C. Gamification",
      "D. Role-based training",
    ],
  },
  {
    numb: 14,
    question:
      "Your organization is updating the data policy, and management wants to ensure that employees get training on their responsibilities based on their roles. Which of the following BEST describes the responsibilities of data owners and indicates what training they need?",
    answer: "B. Ensuring data is classified and labeled correctly",
    explanation:
      "Owners are responsible for identifying the proper classification of data, ensuring it is labeled correctly, and ensuring security controls are implemented to protect the data. A data custodian (also called a data steward) is responsible for routine daily tasks such as backing up data. A data protection officer (DPO) is responsible for ensuring the organization is complying with relevant laws. End users need to be trained on common threats, such as malware and phishing attacks.",
    options: [
      "A. Ensuring data is backed up in accordance with the data policy",
      "B. Ensuring data is classified and labeled correctly",
      "C. Complying with laws related to privacy",
      "D. Understanding common threats, such as malware and phishing attacks",
    ],
  },
  {
    numb: 15,
    question:
      "Organizations that conduct business in the EU must have a position within the organization that can act as an independent advocate for the proper care and use of customer information. Which of the following BEST identifies this position?",
    answer: "D. Data protection officer",
    explanation:
      "The data protection officer (DPO) is a role identified in the General Data Protection Regulation (GDPR), and the GDPR specifies the person in this role needs to act as an independent advocate for customer information. Data owners are responsible for identifying the proper classification of data, ensuring it is labeled correctly, and ensuring security controls are implemented to protect the data. A data custodian (also called a data steward) is responsible for routine daily tasks such as backing up data. A data processor is any entity that uses and manipulates the data.",
    options: [
      "A. Data owner",
      "B. Data custodian",
      "C. Data processor",
      "D. Data protection officer",
    ],
  },
];
