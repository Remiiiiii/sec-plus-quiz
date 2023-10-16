let questions = [
  {
    numb: 1,
    question:
      "Management within your organization has defined a use case to support the confidentiality of data stored in a database. Which of the following solutions will BEST  meet this need?",
    answer: "C. Encryption",
    options: [
      "A. Hashing",
      "B. Disk redundancies",
      "C. Encryption",
      "D. Patching",
    ],
  },
  {
    numb: 2,
    question:
      "Apu manages network devices in his store and maintains copies of the configuration files for all the managed routers and switches. On a weekly basis, he creates hashes for these files and compares them with hashes he created on the same files the previous week. Which of the following use case is he MOST likely supporting?",
    answer: "B. Supporting integrity",
    options: [
      "A. Supporting confidentiality",
      "B. Supporting integrity",
      "C. Supporting encryption",
      "D. Supporing availability",
    ],
  },
  {
    numb: 3,
    question:
      "Which of the following is a cryptographic algorithm that will create a fixed-length output from a data file but cannot be used to re-create the original data file?",
    answer: "A. MD5",
    options: ["A. MD5", "B. AES", "C. IDS", "D. SIEM"],
  },
  {
    numb: 4,
    question:
      "Your organization hosts an e-commerce web server selling digital products. The server randomly experiences a high volume of sales and usage, which causes spikes in resource usage. These spikes occasionally take the server down. Which of the following should be implemented to prevent these outages?",
    answer: "A. Elasticity",
    options: [
      "A. Elasticity",
      "B. Scalibility",
      "C. Normalization",
      "D. Stored Procedure",
    ],
  },
  {
    numb: 5,
    question:
      "An administrator recently installed an IDS to help reduce the impact of security incidents. Which of the following BEST identifies the control type of an IDS?",
    answer: "D. Detective",
    options: ["A. Preventive", "B. Physical", "C. Deterrent", "D. Detective"],
  },
  {
    numb: 6,
    question:
      "Maggie works in the security section of the IT department. Her primary responsibility is to monitor security logs, analyze trends reported by the SIEM, and validate alerts. Which of the following choices BEST identifies the primary security control she's implementing?",
    answer: "C. Detective control",
    options: [
      "A. Compensating",
      "B. Preventive control",
      "C. Detective control",
      "D. Corrective control",
    ],
  },
  {
    numb: 7,
    question:
      "A server in your network's DMZ was recently attacked. The firewall logs show that the server was attacked from an external IP address with the following socket: 72.52.230.233:6789. You want to see if the connection is still active. Which of the following tools would be BEST to use?",
    answer: "C. netstat",
    options: ["A. tracert", "B. arp", "C. netstat", "D. dig"],
  },
  {
    numb: 8,
    question:
      "You suspect that traffic in your network is being rerouted to an unauthorized router within your network. Which of the following command-line tools would help you narrow down the problem?",
    answer: "B. tracert",
    options: ["A. ping", "B. tracert", "C. ipconfig", "D. netstat"],
  },
  {
    numb: 9,
    question:
      "Homer is complaining that he frequently has trouble accessing files on a server in the network. You determine the server's IP address is 172.16.17.11, but ping doesn't show any problem. You decide to use pathping and see the following result. Which of the following is the MOST likely problem?",
    answer: "C. The segment between 192.168.7.1",
    options: [
      "A. The router with the IP address of 10.80.73.150",
      "B. The router with the IP address of 192.168.5.1",
      "C. The segment between 192.168.7.1",
      "D. The router with the IP address of 192.168.7.1",
    ],
  },
  {
    numb: 10,
    question:
      "You're troubleshooting a connectivity issue with a server that has an IP address of 192.168.1.10 from your Linux system. The server does not respond to the ping command. but you suspect that a router is blocking the ping traffic. Which of the following choices would you use to verify the server is responding to traffic?",
    answer: "A. hping",
    options: ["A. hping", "B. ipconfig", "C. netstat", "D. arp"],
  },
  {
    numb: 11,
    question:
      "Lisa is manually searching through a large log file on a Linux system looking for brute force attack indicators. Which of the following commands will simplify this process for her?",
    answer: "A. grep",
    options: ["A. grep", "B. head", "C. tail", "D. cat"],
  },
  {
    numb: 12,
    question:
      "You want to verify that the syslog file is being rotated successfully on a Linux system. Which of the following commands is the BEST choice to use?",
    answer: "D. head",
    options: ["A. logger", "B. cat", "C. tail", "D. head"],
  },
  {
    numb: 13,
    question:
      "You are writing a script that will perform backups on a Linux system and you plan to schedule the script to run after midnight daily. You want to ensure that the script records when the backup starts and when the backup ends. Which of the following is the BEST choice to meet this requirement?",
    answer: "D. logger",
    options: ["A. head", "B. tail", "C. grep", "D. logger"],
  },
  {
    numb: 14,
    question:
      "Maggie needs access to the project.doc file available on a Linux server. Lisa, a system administrator responsible for this server, sees the following permissions for the file: rwx rw- --- What should Lisa use to grant Maggie read access to the file?",
    answer: "A. chmod",
    options: ["A. chmod", "B. journalctl", "C. cat", "D. LAMP"],
  },
  {
    numb: 15,
    question:
      "Which of the following describes the proper format of log entries for Linux systems?",
    answer: "D. syslog",
    options: ["A. NXlog", "B. logger", "C. SIEM", "D. syslog"],
  },
];
