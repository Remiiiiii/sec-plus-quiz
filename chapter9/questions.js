let questions = [
  {
    numb: 1,
    question:
      "Employees access the data center by entering a cipher code at the door. However, everyone uses the same code, so it does not identify individuals. After a recent security incident, management has decided to implement a key card system that will identify individuals who enter and exit this secure area. However, the installation might take six months or longer. Which of the following choices can the organization install immediately to identify individuals who enter or exit the secure area? ",
    answer: "C. CCTV",
    explanation:
      "Closed-circuit television (CCTV) or a similar video surveillance system can monitor the entrance and record who enters and exits the area. An access control vestibule (sometimes called a mantrap) prevents tailgating, but it doesn't necessarily identify individuals. An access list is useful if a guard identifies users and allows access based on the access list, but the access list does not identify users. Bollards are a type of barricade that protects building entrances. Using a CCTV until the key card system is installed is an example of a compensating control, but all compensating controls do not identify people.",
    options: [
      "A. Access control vestibule",
      "B. Access lists",
      "C. CCTV",
      "D. Bollards",
      "E. Compensating control",
    ],
  },
  {
    numb: 2,
    question:
      "Your local library is planning to purchase new laptops that patrons can use for Internet research. However, management is concerned about possible theft. Which of the following is the BEST choice to prevent theft of these laptops? ",
    answer: "C. Cable locks",
    explanation:
      "A cable lock attaches to a computer and wraps around a piece of furniture to secure it to deter and prevent theft. This is like a bike lock used to secure a bicycle to a bike rack. A mantrap prevents tailgating but is unrelated to this question. Anti-malware software protects the systems from viruses and other malware. Disk encryption is useful if the computers have confidential information, but it wouldn't be appropriate to put confidential information on a public computer.",
    options: [
      "A. Mantrap",
      "B. Anti-malware software",
      "C. Cable locks",
      "Disk encryption",
    ],
  },
  {
    numb: 3,
    question:
      "Your organization needs to create a design for a high-security network for a U.S. government contract. The network should not be accessible by your organization's existing networks or the Internet. Which of the following options will BEST meet this need?",
    answer: "B. Air gap",
    explanation:
      "An air gap is a physical security control that ensures that the a network is physically isolated from other networks, including the Internet. A Faraday cage prevents radio frequency (RF) signals from entering or emanating beyond an enclosure, but a network within a Faraday cage can still be connected to external networks. Protected cable distribution practices isolate cables from electromagnetic interference (EMI) sources but don't isolate networks. Vaults are rooms or large compartments used to store valuables, not isolate networks.",
    options: [
      "A. Faraday cage",
      "B. Air gap",
      "C. Protected cable distribution",
      "D. Vault",
    ],
  },
  {
    numb: 4,
    question:
      "You need to secure access to a data center. Which of the following choices provides the BEST physical security to meet this need? (Select THREE.)",
    answer: ["A. Biometrics", "C. Access control vestibule", "D. CCTV"],
    explanation:
      "A biometric reader used for access control, an access control vestibule (sometimes called a mantrap), and a closed-circuit television (CCTV) system all provide strong physical security for accessing the data center. Cable locks are effective theft deterrents for mobile devices such as laptops, but they don't protect data centers. Heating, ventilation, and air conditioning (HVAC) systems can control the data environment, but they don't secure access.",
    options: [
      "A. Biometrics",
      "B. Cable locks",
      "C. Access control vestibule",
      "D. CCTV",
      "E. HVAC",
    ],
    numAnswersToSelect: 3,
  },
  {
    numb: 5,
    question:
      "You need to add disk redundancy for a critical server in your organization's screened subnet. Management wants to ensure it supports the drive failure. Which of the following is the BEST solution for this requirement?",
    answer: "D. RAID-6",
    explanation:
      "A redundant array of independent disks 6 (RAID-6) is the best solution of the available answers. It supports two-drive failure meaning that two drives can fail in the RAID-6, and the disk subsystem will continue to operate. RAID-0 (disk striping) doesn't have any fault tolerance and will fail if a single drive fails. RAID-1 (disk mirroring) uses only two drives. If one drive fails in a RAID-1, the data is preserved, but if two drives fail, all data is lost. RAID-5 (striping with parity) will continue to operate if one drive fails, but all data is lost if two drives fail.",
    options: ["A. RAID-0", "B. RAID-1", "C. RAID-5", "D. RAID-6"],
  },
  {
    numb: 6,
    question:
      "Your organization hosts several databases on two servers. Management wants to increase the redundancy of data storage for these servers. Which of the following is the BEST choice to meet this requirement? ",
    answer: "D. Multipath",
    explanation:
      "Multipath is a fault-tolerance technique that provides more than one path for a system to the data storage system. It could be two Small Computer System Interface (SCSI) controllers providing a path to SCSI disks, or two storage area network (SAN) switches providing redundant paths to a SAN. Network interface card (NIC) teaming combines the bandwidth of two or more NICs to increase the throughput, but the NICs won't necessarily be used to access disks. Managed power distribution units (PDUs) provide the ability to monitor energy consumption in a data center remotely. An uninterruptible power supply (UPS) provides short-term power to systems after a power failure.",
    options: ["A. NIC teaming", "B. Managed PDUs", "C. UPS", "D. Multipath"],
  },
  {
    numb: 7,
    question:
      "Your organization hosts an e-commerce website that has been receiving a significant increase in traffic. The CPU is handling the load, but the server is unable to process the bandwidth consistently. Which of the following is the BEST choice to solve this problem?",
    answer: "B. NIC teaming",
    explanation:
      "Network interface card (NIC) teaming combines the bandwidth of two or more NICs to increase the throughput and would solve this problem. A storage area network (SAN) is a computer network that provides block-level data storage. A SAN can increase disk performance, not bandwidth performance. Multipath is a fault-tolerance technique used for data storage. Managed power distribution units (PDUs) provide the ability to remotely monitor energy consumption in a data center",
    options: ["A. SAN", "B. NIC teaming", "C. Multipath", "D. Managed PDUs"],
  },
  {
    numb: 8,
    question:
      "Your organization is planning to deploy a new e-commerce website. Management anticipates heavy processing requirements for a back-end application used by the website. The current design will use one web server and multiple application servers. Additionally, when beginning a session, a user will connect to an application server and remain connected to the same application server for the entire session. Which of the following BEST describes the configuration of the application servers?",
    answer: "D. Persistence",
    explanation:
      "This describes a load-balancing configuration using persistence so that a user will connect to the same application server for an entire session. All the answers are related to load balancing, but the scenario describes load balancing with persistence, so persistence is more correct than load balancing. An active/active load-balancing configuration indicates all the servers are handling user requests. An active/passive load-balancing configuration has at least one server that is not actively serving clients but can take over if another server fails. However, the scenario didn't give enough information to determine if the application servers were configured as active/active or active/passive.",
    options: [
      "A. Load balancing",
      "B. Active/active",
      "C. Active/passive",
      "D. Persistence",
    ],
  },
  {
    numb: 9,
    question:
      "Your organization recently implemented two servers in an active/passive load-balancing configuration. What security goal does this support?",
    answer: "D. Resilience",
    explanation:
      "An active/passive load-balancing configuration supports resilience and high availability. An active/passive load-balancing configuration uses redundant servers to ensure service continues to operate even if one of the servers fails. Obfuscation methods attempt to make something unclear or difficult to understand and are not related to load balancing. Integrity methods ensure that data has not been modified. Confidentiality methods such as encryption prevent the unauthorized disclosure of data.",
    options: [
      "A. Obfuscation",
      "B. Integrity",
      "C. Confidentiality",
      "D. Resilience",
    ],
  },
  {
    numb: 10,
    question:
      "Your database backup strategy includes full backups performed on Saturdays at 12:01 a.m. and differential backups performed daily at 12:01 a.m. If the database fails on Thursday afternoon, how many backups are required to restore it?",
    answer: "B. 2",
    explanation:
      "Your database backup strategy includes full backups performed on Saturdays at 12:01 a.m. and differential backups performed daily at 12:01 a.m. If the database fails on Thursday afternoon, how many backups are required two backups are required, the full backup performed on Sunday at 12:01 a.m. and the differential backup performed on Thursday at12:01 a.m. If you perform only one backup, it would be the full backup. You can't restore a differential backup without restoring the full backup first. This wouldn't include all the changes that occurred during the week. If you were using a full/incremental strategy, you would apply five backups: the full backup, and each of the incremental backups performed daily(Monday, Tuesday, Wednesday, and Thursday). to restore it.",
    options: ["A. 1", "B. 2", "C. 3", "D. 5"],
  },
  {
    numb: 11,
    question:
      "After reading about increased ransomware attacks against the health sector, hospital administrators want to enhance organizational resilience against these attacks. Which of the following could IT personnel implement to support this goal?",
    answer: "B. Perform regular testing and validation of full backups",
    explanation:
      "Performing regular testing and validation of full backups will enhance organizational resilience against ransomware attacks. Resiliency techniques help ensure an organization can recover from a security incident and minimize downtime after an outage. The other answers all refer to preventive methods taken before an outage. Email filtering blocks spam and malicious emails can prevent ransomware attacks. Keeping systems patched helps ensure they aren't susceptible to known vulnerabilities. Training users decreases the possibility that they may respond inappropriately to malicious emails.",
    options: [
      "A. Use email filtering to block malicious emails",
      "B. Perform regular testing and validation of full backups",
      "C. Ensure all systems are patched",
      "D. Increase end-user training related to ransomware and other risks",
    ],
  },
  {
    numb: 12,
    question:
      "Your organization hired a security consultant to create a BIA. She is trying to identify processes that can potentially cause losses in revenue if they stop functioning. Which of the following BEST describes what she is identifying?",
    answer: "C. Mission-essential functions",
    explanation:
      "The security consultant identifies mission-essential functions, which is a key part of a business impact analysis (BIA). A single point of failure is a component within a system that can cause the entire system to fail if the component fails. It's common to eliminate single points of failure in critical systems, but not all single points of failure support mission-essential functions. Critical systems support mission-essential functions. However, if single points of failure have been eliminated, a critical system can fail but the mission-essential function will continue to operate. The mean time between failures (MTBF) identifies the average (the arithmetic mean) time between failures.",
    options: [
      "A. Single points of failure",
      "B. Critical systems",
      "C. Mission-essential functions",
      "D. MTBF",
    ],
  },
  {
    numb: 13,
    question:
      "After a recent attack causing a data breach, an executive is analyzing the financial losses. She determined that the attack was likely to result in losses of at least $1 million. She wants to ensure that this information is documented for future planning purposes. Which of the following documents is the most likely to use?",
    answer: "B. BIA",
    explanation:
      "A business impact analysis (BIA) includes information on potential losses and is the most likely document of those listed where this loss would be documented. A disaster recovery plan (DRP) includes methods used to recover from an outage. The mean time to repair (MTTR)identifies the average (the arithmetic mean) time it takes to restore a failed system. The recovery time objective (RTO) identifies the maximum amount of time it should take to restore a system after an outage.",
    options: ["A. DRP", "B. BIA", "C. MTTR", "D. RTO"],
  },
  {
    numb: 14,
    question:
      "A project manager is reviewing a business impact analysis. It indicates that a key website can tolerate a maximum of three hours of downtime. Administrators have identified several systems that require redundancy additions to meet this maximum downtime requirement. Of the following choices, what term refers to the maximum of three hours of downtime?",
    answer: "D. RTO",
    explanation:
      "The recovery time objective (RTO) identifies the maximum amount of time it can take to restore a system after an outage. Because the business impact analysis states that the website can only tolerate three hours of downtime, this also identifies the RTO. The recovery point objective (RPO) identifies a point in time where data loss is acceptable, but it doesn't refer to downtime. The mean time to recover (MTTR) metric identifies the average (the arithmetic mean) time it takes to restore a failed system, but not the maximum amount of time a system can be down. The mean time between failures (MTBF) metric provides a measure of reliability and is usually represented in hours. A disaster recover (DRP) details the recovery steps to take after different types of disasters.",
    options: ["A. RPO", "B. MTTR", "C. MTBF", "D. RTO", "E. DRP"],
  },
  {
    numb: 15,
    question:
      "Lisa has scheduled quarterly meetings with department leaders to discuss how they would respond to various scenarios such as natural disasters or cyber attacks. During the meetings, she presents a scenario and asks attendees to indicate their responses. Also, during the meetings, she injects variations on the scenario similar to what may happen during a live event and encourages attendees to discuss their responses. What does this describe?",
    answer: "B. Tabletop exercise",
    explanation:
      "This is a tabletop exercise. A tabletop exercise is discussion-based, and participants discuss their responses to various scenarios. A simulation is a hands-on exercise, not a meeting. Incident response refers to the actual steps taken in response to an incident(preparation, identification, containment, eradication, recovery, lessons learned), not a meeting discussing steps to take. Site resiliency is tested by seeing if an alternate site (such as a hot site, cold site, or warm site) can take over if necessary, but the scenario doesn't discuss alternate sites.",
    options: [
      "A. Simulation",
      "B. Tabletop exercise",
      "C. Incident response",
      "D. Testing site resiliency",
    ],
  },
];
