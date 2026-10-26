/**
 * Canonical Documentation Navigation & Hierarchy Model
 * Auto-generated from curriculum metadata and localization files.
 */

export const DOCS_NAVIGATION = [
  {
    "id": "git",
    "lessonKey": "l1",
    "module": "MODULE 01",
    "accent": "orange",
    "icon": "GitBranch",
    "category": "foundations",
    "title": {
      "en": "Git: Local Version Control",
      "km": "Git: មូលដ្ឋានគ្រឹះ Version Control"
    },
    "desc": {
      "en": "Master local version control on your machine. Learn repository initialization, file tracking, staging, commits, branches, and the 4-layer mental model.",
      "km": "ស្វែងយល់ពីរបៀបដំណើរការ Git លើកុំព្យូទ័ររបស់អ្នក។ ចេះបង្កើត Repository, តាមដានឯកសារ, Staging, Commit, Branch និងយល់ពី Mental Model ទាំង ៤ ស្រទាប់។"
    },
    "totalLessons": 8,
    "sections": [
      {
        "id": "git-sec-1",
        "part": "FOUNDATIONS",
        "partKey": "part_foundations",
        "title": {
          "en": "FOUNDATIONS",
          "km": "មូលដ្ឋានគ្រឹះ"
        },
        "lessons": [
          {
            "id": 1,
            "number": 1,
            "slideId": "slide-1",
            "title": {
              "en": "Mental Model & The 4 Git Areas",
              "km": "Mental Model និងតំបន់ទាំង ៤ របស់ Git"
            },
            "subtitle": {
              "en": "Understanding Git vs. GitHub, why version control matters, and the full 4-layer lifecycle",
              "km": "Git ទល់នឹង GitHub, សារៈសំខាន់នៃ Version Control និងដំណើរការ ៤ ស្រទាប់ពេញលេញ"
            },
            "href": "#/docs/git/1"
          },
          {
            "id": 2,
            "number": 2,
            "slideId": "slide-2",
            "title": {
              "en": "Installation & Developer Identity",
              "km": "ការដំឡើង និងការកំណត់អត្តសញ្ញាណ"
            },
            "subtitle": {
              "en": "Terminal verification, OS install commands, and author credentials setup",
              "km": "ការផ្ទៀងផ្ទាត់ terminal, ដំឡើងតាម OS និងកំណត់ឈ្មោះ/អ៊ីមែល"
            },
            "href": "#/docs/git/2"
          }
        ]
      },
      {
        "id": "git-sec-2",
        "part": "LOCAL LIFECYCLE",
        "partKey": "part_lifecycle",
        "title": {
          "en": "LOCAL REPOSITORY LIFECYCLE",
          "km": "ដំណើរការ REPOSITORY លើម៉ាស៊ីន"
        },
        "lessons": [
          {
            "id": 3,
            "number": 3,
            "slideId": "slide-3",
            "title": {
              "en": "Repository Initialization & Status",
              "km": "ការបង្កើត Repository និងការពិនិត្យស្ថានភាព (git init & status)"
            },
            "subtitle": {
              "en": "Workspace setup, git init, .git directory internals, and git status diagnostics",
              "km": "រៀបចំ folder គម្រោង, git init, រចនាសម្ព័ន្ធ .git និងការវិភាគដោយ git status"
            },
            "href": "#/docs/git/3"
          },
          {
            "id": 4,
            "number": 4,
            "slideId": "slide-4",
            "title": {
              "en": "Staging & Atomic Commits",
              "km": "Staging និងការបង្កើត Commit ត្រឹមត្រូវ"
            },
            "subtitle": {
              "en": "git add, git diff inspection, atomic commits, SHA-1 hashes, and git log history",
              "km": "git add, ការពិនិត្យ diff, ការ commit តាមស្តង់ដារ, SHA-1 hash និង git log"
            },
            "href": "#/docs/git/4"
          }
        ]
      },
      {
        "id": "git-sec-3",
        "part": "BRANCHING & CONFLICTS",
        "partKey": "part_branching",
        "title": {
          "en": "BRANCHING & MERGING",
          "km": "BRANCHES និងការបញ្ចូលកូដ"
        },
        "lessons": [
          {
            "id": 5,
            "number": 5,
            "slideId": "slide-5",
            "title": {
              "en": "Branching & Context Switching",
              "km": "Branching និងការផ្លាស់ប្តូរបរិបទកូដ"
            },
            "subtitle": {
              "en": "Parallel development, git switch, fast-forward vs 3-way merges",
              "km": "ការបង្កើត branch ដាច់ដោយឡែក, git switch, និងការបញ្ចូលកូដ merge"
            },
            "href": "#/docs/git/5"
          },
          {
            "id": 6,
            "number": 6,
            "slideId": "slide-6",
            "title": {
              "en": "Mastering Merge Conflicts",
              "km": "ការដោះស្រាយជម្លោះកូដ Merge Conflicts"
            },
            "subtitle": {
              "en": "Why conflicts occur, understanding diff markers, and 3-step manual resolution",
              "km": "មូលហេតុនៃជម្លោះកូដ, ការយល់ពីសញ្ញាសម្គាល់ conflict, និងដំណោះស្រាយ ៣ ជំហាន"
            },
            "href": "#/docs/git/6"
          }
        ]
      },
      {
        "id": "git-sec-4",
        "part": "SAFETY & COLLABORATION",
        "partKey": "part_collaboration",
        "title": {
          "en": "SAFETY & TEAM WORKFLOW",
          "km": "សុវត្ថិភាព និងការងារជាក្រុម"
        },
        "lessons": [
          {
            "id": 7,
            "number": 7,
            "slideId": "slide-7",
            "title": {
              "en": "Undoing Mistakes & Repository Hygiene",
              "km": "ការកែកំហុស និងអនាម័យ Repository (.gitignore)"
            },
            "subtitle": {
              "en": "git restore, commit --amend, git stash shelving, and .gitignore rules",
              "km": "git restore, commit --amend, git stash និងការការពារកូដសម្ងាត់ជាមួយ .gitignore"
            },
            "href": "#/docs/git/7"
          },
          {
            "id": 8,
            "number": 8,
            "slideId": "slide-8",
            "title": {
              "en": "Remote Collaboration & Team Workflow",
              "km": "ការតភ្ជាប់ GitHub និងដំណើរការការងារជាក្រុម"
            },
            "subtitle": {
              "en": "git remote add, first push to main, git pull sync, and 4 golden rules",
              "km": "git remote, ការ push ទៅ main, git pull និងច្បាប់មាសទាំង ៤ សម្រាប់អ្នកអភិវឌ្ឍន៍"
            },
            "href": "#/docs/git/8"
          }
        ]
      }
    ]
  },
  {
    "id": "github",
    "lessonKey": "l2",
    "module": "MODULE 02",
    "accent": "purple",
    "icon": "FolderGit2",
    "category": "foundations",
    "title": {
      "en": "GitHub: Cloud Repositories & Collaboration",
      "km": "GitHub: ការផ្ទុកលើ Cloud & ការសហការ"
    },
    "desc": {
      "en": "Connect local projects to the cloud. Configure remotes, push code, handle branches, clone repositories, and collaborate with teams using Pull Requests.",
      "km": "ភ្ជាប់គម្រោង Git ទៅកាន់ GitHub។ កំណត់ Remote, រុញកូដ (Push), ទាញកូដ (Pull), Clone គម្រោង និងធ្វើការងារជាក្រុមតាមរយៈ Pull Requests។"
    },
    "totalLessons": 22,
    "sections": [
      {
        "id": "github-sec-1",
        "part": "WELCOME",
        "partKey": "part_welcome",
        "title": {
          "en": "WELCOME",
          "km": "សូមស្វាគមន៍"
        },
        "lessons": [
          {
            "id": 1,
            "number": 1,
            "slideId": "slide-1",
            "title": {
              "en": "The Everyday Git Workflow",
              "km": "វដ្តការងារ Git ប្រចាំថ្ងៃ"
            },
            "subtitle": {
              "en": "The four commands developers execute dozens of times every single day",
              "km": "ពាក្យបញ្ជាទាំង ៤ ដែលអ្នកសរសេរកម្មវិធីរត់រាប់សិបដងរាល់ថ្ងៃ"
            },
            "href": "#/docs/github/1"
          }
        ]
      },
      {
        "id": "github-sec-2",
        "part": "01 • ARCHITECTURE",
        "partKey": "part_arch",
        "title": {
          "en": "ARCHITECTURE",
          "km": "ARCHITECTURE"
        },
        "lessons": [
          {
            "id": 2,
            "number": 2,
            "slideId": "slide-2",
            "title": {
              "en": "Example: Modify a Project",
              "km": "ឧទាហរណ៍ជាក់ស្តែង៖ ការកែប្រែគម្រោង"
            },
            "subtitle": {
              "en": "A real-world walkthrough of editing code and pushing updates",
              "km": "ការអនុវត្តជាក់ស្តែងនៃការកែប្រែកូដ និងការ push ទៅកាន់ GitHub"
            },
            "href": "#/docs/github/2"
          },
          {
            "id": 3,
            "number": 3,
            "slideId": "slide-3",
            "title": {
              "en": "Clone a Repository",
              "km": "ទាញយកគម្រោងដែលមានស្រាប់ (git clone)"
            },
            "subtitle": {
              "en": "Downloading an existing repository and its full history from GitHub",
              "km": "ការ Download repository ដែលមានស្រាប់ និងប្រវត្តិកូដទាំងមូលពី GitHub"
            },
            "href": "#/docs/github/3"
          }
        ]
      },
      {
        "id": "github-sec-3",
        "part": "02 • SETUP & AUTH",
        "partKey": "part_setup",
        "title": {
          "en": "SETUP & AUTH",
          "km": "SETUP & AUTH"
        },
        "lessons": [
          {
            "id": 4,
            "number": 4,
            "slideId": "slide-4",
            "title": {
              "en": "Pull Changes",
              "km": "ទាញយកបច្ចុប្បន្នភាពពី GitHub (git pull)"
            },
            "subtitle": {
              "en": "Syncing your local workspace with updates made by teammates or other machines",
              "km": "ធ្វើសមកាលកម្មកូដក្នុងម៉ាស៊ីនឱ្យទាន់សម័យជាមួយអ្វីដែលសមាជិកក្រុមបានកែ"
            },
            "href": "#/docs/github/4"
          }
        ]
      },
      {
        "id": "github-sec-4",
        "part": "03 • REPOSITORY SETUP",
        "partKey": "part_repo",
        "title": {
          "en": "REPOSITORY SETUP",
          "km": "REPOSITORY SETUP"
        },
        "lessons": [
          {
            "id": 5,
            "number": 5,
            "slideId": "slide-5",
            "title": {
              "en": "What Is a Branch?",
              "km": "តើអ្វីជា Branch (មែកធាងកូដ)?"
            },
            "subtitle": {
              "en": "Creating isolated sandboxes for new features without breaking production",
              "km": "ការបង្កើតកន្លែងដាច់ដោយឡែកសម្រាប់សរសេរមុខងារថ្មីដោយមិនប៉ះពាល់កូដដើម"
            },
            "href": "#/docs/github/5"
          },
          {
            "id": 6,
            "number": 6,
            "slideId": "slide-6",
            "title": {
              "en": "Create and Switch Branch",
              "km": "បង្កើត និងប្តូរ Branch (git switch)"
            },
            "subtitle": {
              "en": "Modern branch management syntax in Git",
              "km": "វាក្យសម្ព័ន្ធគ្រប់គ្រង branch បែបទំនើបនៅក្នុង Git"
            },
            "href": "#/docs/github/6"
          }
        ]
      },
      {
        "id": "github-sec-5",
        "part": "04 • PUSHING CODE",
        "partKey": "part_push",
        "title": {
          "en": "PUSHING CODE",
          "km": "PUSHING CODE"
        },
        "lessons": [
          {
            "id": 7,
            "number": 7,
            "slideId": "slide-7",
            "title": {
              "en": "Git Command Cheat Sheet",
              "km": "តារាងសង្ខេបពាក្យបញ្ជា Git"
            },
            "subtitle": {
              "en": "Quick reference of the most vital commands",
              "km": "ឯកសារយោងរហ័សនៃពាក្យបញ្ជាដែលប្រើញឹកញាប់បំផុត"
            },
            "href": "#/docs/github/7"
          },
          {
            "id": 8,
            "number": 8,
            "slideId": "slide-8",
            "title": {
              "en": "Mistake: Forgetting to Commit",
              "km": "កំហុសទូទៅ៖ ភ្លេច Commit មុនពេល Push"
            },
            "subtitle": {
              "en": "Why running git add then git push doesn't upload your changes",
              "km": "មូលហេតុដែលការរត់ git add រួច git push មិន upload អ្វីសោះ"
            },
            "href": "#/docs/github/8"
          }
        ]
      },
      {
        "id": "github-sec-6",
        "part": "05 • DAILY WORKFLOW",
        "partKey": "part_workflow",
        "title": {
          "en": "DAILY WORKFLOW",
          "km": "DAILY WORKFLOW"
        },
        "lessons": [
          {
            "id": 9,
            "number": 9,
            "slideId": "slide-9",
            "title": {
              "en": "Mistake: Wrong Remote URL",
              "km": "កំហុសទូទៅ៖ វាយ URL របស់ Remote ខុស"
            },
            "subtitle": {
              "en": "Fixing typos in repository URLs without deleting the repository",
              "km": "វិធីកែតម្រូវ URL របស់ repository ដោយមិនបាច់លុបគម្រោងចោល"
            },
            "href": "#/docs/github/9"
          },
          {
            "id": 10,
            "number": 10,
            "slideId": "slide-10",
            "title": {
              "en": "Mistake: Push Rejected",
              "km": "កំហុសទូទៅ៖ ការ Push ត្រូវបានបដិសេធ (Push Rejected)"
            },
            "subtitle": {
              "en": "Understanding non-fast-forward rejections and why never to force push",
              "km": "ស្វែងយល់ពីមូលហេតុ និងហេតុអ្វីមិនគួរប្រើ force push ផ្តេសផ្តាស"
            },
            "href": "#/docs/github/10"
          }
        ]
      },
      {
        "id": "github-sec-7",
        "part": "06 • PULL REQUESTS",
        "partKey": "part_pr",
        "title": {
          "en": "PULL REQUESTS",
          "km": "PULL REQUESTS"
        },
        "lessons": [
          {
            "id": 11,
            "number": 11,
            "slideId": "slide-11",
            "title": {
              "en": "What Is .gitignore?",
              "km": "តើអ្វីជាឯកសារ .gitignore?"
            },
            "subtitle": {
              "en": "Preventing junk, generated files, and secrets from entering your repository",
              "km": "ការពារកុំឱ្យឯកសារសំរាម និងលេខកូដសម្ងាត់ធ្លាយចូលទៅក្នុង Repository"
            },
            "href": "#/docs/github/11"
          },
          {
            "id": 12,
            "number": 12,
            "slideId": "slide-12",
            "title": {
              "en": "Example Project Structure",
              "km": "រចនាសម្ព័ន្ធគម្រោងគំរូ"
            },
            "subtitle": {
              "en": "Visualizing what gets tracked vs what stays local",
              "km": "បង្ហាញរូបភាពជាក់ស្តែងរវាងអ្វីដែលត្រូវ push និងអ្វីដែលត្រូវទុកលើម៉ាស៊ីន"
            },
            "href": "#/docs/github/12"
          },
          {
            "id": 13,
            "number": 13,
            "slideId": "slide-13",
            "title": {
              "en": "From Zero to GitHub",
              "km": "ពីដំបូងរហូតដល់ GitHub (រូបមន្តពេញលេញ)"
            },
            "subtitle": {
              "en": "The complete master script from an empty terminal to your first pushed project",
              "km": "ស្គ្រីបមេពេញលេញតាំងពី folder ទទេ រហូតដល់ការ push គម្រោងដំបូង"
            },
            "href": "#/docs/github/13"
          }
        ]
      },
      {
        "id": "github-sec-8",
        "part": "07 • CLONING & CONTRIBUTING",
        "partKey": "part_clone",
        "title": {
          "en": "CLONING & CONTRIBUTING",
          "km": "CLONING & CONTRIBUTING"
        },
        "lessons": [
          {
            "id": 14,
            "number": 14,
            "slideId": "slide-14",
            "title": {
              "en": "The Mental Model",
              "km": "គំរូស្ថាបត្យកម្ម ៤ ជាន់របស់ Git"
            },
            "subtitle": {
              "en": "The four architectural layers of Git and how data travels between them",
              "km": "ស្រទាប់ស្ថាបត្យកម្មទាំងបួននៃ Git និងរបៀបដែលទិន្នន័យផ្លាស់ទីរវាងគ្នា"
            },
            "href": "#/docs/github/14"
          },
          {
            "id": 15,
            "number": 15,
            "slideId": "slide-15",
            "title": {
              "en": "Your First GitHub Project",
              "km": "លំហាត់អនុវត្ត៖ គម្រោង GitHub ដំបូងរបស់អ្នក"
            },
            "subtitle": {
              "en": "A step-by-step practical drill for every student",
              "km": "ការអនុវត្តផ្ទាល់មួយជំហានម្តងៗសម្រាប់សិស្សគ្រប់រូប"
            },
            "href": "#/docs/github/15"
          }
        ]
      },
      {
        "id": "github-sec-9",
        "part": "08 • CONFLICT RESOLUTION",
        "partKey": "part_conflict",
        "title": {
          "en": "CONFLICT RESOLUTION",
          "km": "CONFLICT RESOLUTION"
        },
        "lessons": [
          {
            "id": 16,
            "number": 16,
            "slideId": "slide-16",
            "title": {
              "en": "Final Challenge",
              "km": "បញ្ហាប្រឈមចុងក្រោយ (ការអនុវត្តដោយខ្លួនឯង)"
            },
            "subtitle": {
              "en": "Practice the everyday cycle completely independently",
              "km": "អនុវត្តវដ្តការងារប្រចាំថ្ងៃដោយឯករាជ្យទាំងស្រុង"
            },
            "href": "#/docs/github/16"
          }
        ]
      },
      {
        "id": "github-sec-10",
        "part": "09 • REPO GOVERNANCE",
        "partKey": "part_governance",
        "title": {
          "en": "REPO GOVERNANCE",
          "km": "REPO GOVERNANCE"
        },
        "lessons": [
          {
            "id": 17,
            "number": 17,
            "slideId": "slide-17",
            "title": {
              "en": "Final Summary",
              "km": "សេចក្តីសង្ខេបចុងក្រោយ"
            },
            "subtitle": {
              "en": "The foundational principles to carry forward in your developer journey",
              "km": "គោលការណ៍គ្រឹះដែលត្រូវចងចាំសម្រាប់ដំណើរជីវិតជាអ្នកសរសេរកម្មវិធី"
            },
            "href": "#/docs/github/17"
          },
          {
            "id": 18,
            "number": 18,
            "slideId": "slide-18",
            "title": {
              "en": "Questions?",
              "km": "សំណួរនិងចម្លើយ?"
            },
            "subtitle": {
              "en": "“Happy coding”",
              "km": "“រីករាយក្នុងការសរសេរកូដ (Happy coding)”"
            },
            "href": "#/docs/github/18"
          }
        ]
      },
      {
        "id": "github-sec-11",
        "part": "10 • AUTOMATION (CI/CD)",
        "partKey": "part_cicd",
        "title": {
          "en": "AUTOMATION (CI/CD)",
          "km": "AUTOMATION (CI/CD)"
        },
        "lessons": [
          {
            "id": 19,
            "number": 19,
            "slideId": "slide-19",
            "title": {
              "en": "GitHub Actions: Automated Continuous Integration",
              "km": "GitHub Actions: Automated Continuous Integration"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/github/19"
          }
        ]
      },
      {
        "id": "github-sec-12",
        "part": "11 • BEST PRACTICES",
        "partKey": "part_security",
        "title": {
          "en": "BEST PRACTICES",
          "km": "BEST PRACTICES"
        },
        "lessons": [
          {
            "id": 20,
            "number": 20,
            "slideId": "slide-20",
            "title": {
              "en": "Security Best Practices: Never Push Secrets to GitHub",
              "km": "Security Best Practices: Never Push Secrets to GitHub"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/github/20"
          },
          {
            "id": 21,
            "number": 21,
            "slideId": "slide-21",
            "title": {
              "en": "The Everyday Git Workflow",
              "km": "វដ្តការងារ Git ប្រចាំថ្ងៃ"
            },
            "subtitle": {
              "en": "The four commands developers execute dozens of times every single day",
              "km": "ពាក្យបញ្ជាទាំង ៤ ដែលអ្នកសរសេរកម្មវិធីរត់រាប់សិបដងរាល់ថ្ងៃ"
            },
            "href": "#/docs/github/21"
          }
        ]
      },
      {
        "id": "github-sec-13",
        "part": "12 • SUMMARY & LAB",
        "partKey": "part_summary",
        "title": {
          "en": "SUMMARY & LAB",
          "km": "SUMMARY & LAB"
        },
        "lessons": [
          {
            "id": 22,
            "number": 22,
            "slideId": "slide-22",
            "title": {
              "en": "Example: Modify a Project",
              "km": "ឧទាហរណ៍ជាក់ស្តែង៖ ការកែប្រែគម្រោង"
            },
            "subtitle": {
              "en": "A real-world walkthrough of editing code and pushing updates",
              "km": "ការអនុវត្តជាក់ស្តែងនៃការកែប្រែកូដ និងការ push ទៅកាន់ GitHub"
            },
            "href": "#/docs/github/22"
          }
        ]
      }
    ]
  },
  {
    "id": "nextjs",
    "lessonKey": "l3",
    "module": "MODULE 03",
    "accent": "blue",
    "icon": "Globe",
    "category": "frontend",
    "title": {
      "en": "Next.js: The React Framework for the Web",
      "km": "Next.js: React Framework ទំនើបសម្រាប់ Web"
    },
    "desc": {
      "en": "Build modern fullstack web applications with React 19 and the Next.js App Router. Master Server Components, file-based routing, nested layouts, and API routes.",
      "km": "បង្កើត Web Application ទំនើបជាមួយ React 19 និង App Router របស់ Next.js។ ស្វែងយល់ពី Server vs Client Components, Nested Layouts និង API Route Handlers។"
    },
    "totalLessons": 75,
    "sections": [
      {
        "id": "nextjs-sec-1",
        "part": "SECTION 01 — WEB TO NEXT.JS",
        "partKey": "",
        "title": {
          "en": "WEB TO NEXT.JS",
          "km": "WEB TO NEXT.JS"
        },
        "lessons": [
          {
            "id": 1,
            "number": 1,
            "slideId": "slide-1",
            "title": {
              "en": "Next.js: From React to Production",
              "km": "Next.js: From React to Production"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/1"
          },
          {
            "id": 2,
            "number": 2,
            "slideId": "slide-2",
            "title": {
              "en": "What You Will Learn",
              "km": "What You Will Learn"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/2"
          },
          {
            "id": 3,
            "number": 3,
            "slideId": "slide-3",
            "title": {
              "en": "What Is Next.js?",
              "km": "What Is Next.js?"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/3"
          },
          {
            "id": 4,
            "number": 4,
            "slideId": "slide-4",
            "title": {
              "en": "React vs Next.js",
              "km": "React vs Next.js"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/4"
          },
          {
            "id": 5,
            "number": 5,
            "slideId": "slide-5",
            "title": {
              "en": "When Should You Use Next.js?",
              "km": "When Should You Use Next.js?"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/5"
          }
        ]
      },
      {
        "id": "nextjs-sec-2",
        "part": "SECTION 02 — REQUIREMENTS",
        "partKey": "",
        "title": {
          "en": "REQUIREMENTS",
          "km": "REQUIREMENTS"
        },
        "lessons": [
          {
            "id": 6,
            "number": 6,
            "slideId": "slide-6",
            "title": {
              "en": "Before Learning Next.js",
              "km": "Before Learning Next.js"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/6"
          },
          {
            "id": 7,
            "number": 7,
            "slideId": "slide-7",
            "title": {
              "en": "React Fundamentals You Need",
              "km": "React Fundamentals You Need"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/7"
          }
        ]
      },
      {
        "id": "nextjs-sec-3",
        "part": "SECTION 03 — CREATE NEXT.JS PROJECT",
        "partKey": "",
        "title": {
          "en": "CREATE NEXT.JS PROJECT",
          "km": "CREATE NEXT.JS PROJECT"
        },
        "lessons": [
          {
            "id": 8,
            "number": 8,
            "slideId": "slide-8",
            "title": {
              "en": "Install Requirements",
              "km": "Install Requirements"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/8"
          },
          {
            "id": 9,
            "number": 9,
            "slideId": "slide-9",
            "title": {
              "en": "Create a Next.js Application",
              "km": "Create a Next.js Application"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/9"
          },
          {
            "id": 10,
            "number": 10,
            "slideId": "slide-10",
            "title": {
              "en": "Start Development Server",
              "km": "Start Development Server"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/10"
          }
        ]
      },
      {
        "id": "nextjs-sec-4",
        "part": "SECTION 04 — PROJECT STRUCTURE",
        "partKey": "",
        "title": {
          "en": "PROJECT STRUCTURE",
          "km": "PROJECT STRUCTURE"
        },
        "lessons": [
          {
            "id": 11,
            "number": 11,
            "slideId": "slide-11",
            "title": {
              "en": "Next.js Project Structure",
              "km": "Next.js Project Structure"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/11"
          },
          {
            "id": 12,
            "number": 12,
            "slideId": "slide-12",
            "title": {
              "en": "app/page.tsx",
              "km": "app/page.tsx"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/12"
          },
          {
            "id": 13,
            "number": 13,
            "slideId": "slide-13",
            "title": {
              "en": "app/layout.tsx",
              "km": "app/layout.tsx"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/13"
          }
        ]
      },
      {
        "id": "nextjs-sec-5",
        "part": "SECTION 05 — ROUTING",
        "partKey": "",
        "title": {
          "en": "ROUTING",
          "km": "ROUTING"
        },
        "lessons": [
          {
            "id": 14,
            "number": 14,
            "slideId": "slide-14",
            "title": {
              "en": "File-System Routing",
              "km": "File-System Routing"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/14"
          },
          {
            "id": 15,
            "number": 15,
            "slideId": "slide-15",
            "title": {
              "en": "Nested Routes",
              "km": "Nested Routes"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/15"
          },
          {
            "id": 16,
            "number": 16,
            "slideId": "slide-16",
            "title": {
              "en": "Dynamic Routes",
              "km": "Dynamic Routes"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/16"
          }
        ]
      },
      {
        "id": "nextjs-sec-6",
        "part": "SECTION 06 — NAVIGATION",
        "partKey": "",
        "title": {
          "en": "NAVIGATION",
          "km": "NAVIGATION"
        },
        "lessons": [
          {
            "id": 17,
            "number": 17,
            "slideId": "slide-17",
            "title": {
              "en": "Link Component",
              "km": "Link Component"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/17"
          },
          {
            "id": 18,
            "number": 18,
            "slideId": "slide-18",
            "title": {
              "en": "Navigation Architecture",
              "km": "Navigation Architecture"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/18"
          }
        ]
      },
      {
        "id": "nextjs-sec-7",
        "part": "SECTION 07 — COMPONENTS",
        "partKey": "",
        "title": {
          "en": "COMPONENTS",
          "km": "COMPONENTS"
        },
        "lessons": [
          {
            "id": 19,
            "number": 19,
            "slideId": "slide-19",
            "title": {
              "en": "What Is a Component?",
              "km": "What Is a Component?"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/19"
          },
          {
            "id": 20,
            "number": 20,
            "slideId": "slide-20",
            "title": {
              "en": "Props",
              "km": "Props"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/20"
          },
          {
            "id": 21,
            "number": 21,
            "slideId": "slide-21",
            "title": {
              "en": "Component Architecture",
              "km": "Component Architecture"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/21"
          }
        ]
      },
      {
        "id": "nextjs-sec-8",
        "part": "SECTION 08 — SERVER & CLIENT COMPONENTS",
        "partKey": "",
        "title": {
          "en": "SERVER & CLIENT COMPONENTS",
          "km": "SERVER & CLIENT COMPONENTS"
        },
        "lessons": [
          {
            "id": 22,
            "number": 22,
            "slideId": "slide-22",
            "title": {
              "en": "Server Components",
              "km": "Server Components"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/22"
          },
          {
            "id": 23,
            "number": 23,
            "slideId": "slide-23",
            "title": {
              "en": "Client Components",
              "km": "Client Components"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/23"
          },
          {
            "id": 24,
            "number": 24,
            "slideId": "slide-24",
            "title": {
              "en": "Server vs Client",
              "km": "Server vs Client"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/24"
          },
          {
            "id": 25,
            "number": 25,
            "slideId": "slide-25",
            "title": {
              "en": "Choosing Server or Client",
              "km": "Choosing Server or Client"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/25"
          }
        ]
      },
      {
        "id": "nextjs-sec-9",
        "part": "SECTION 09 — STYLING",
        "partKey": "",
        "title": {
          "en": "STYLING",
          "km": "STYLING"
        },
        "lessons": [
          {
            "id": 26,
            "number": 26,
            "slideId": "slide-26",
            "title": {
              "en": "Tailwind CSS in Next.js",
              "km": "Tailwind CSS in Next.js"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/26"
          },
          {
            "id": 27,
            "number": 27,
            "slideId": "slide-27",
            "title": {
              "en": "Responsive UI",
              "km": "Responsive UI"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/27"
          }
        ]
      },
      {
        "id": "nextjs-sec-10",
        "part": "SECTION 10 — DATA FETCHING",
        "partKey": "",
        "title": {
          "en": "DATA FETCHING",
          "km": "DATA FETCHING"
        },
        "lessons": [
          {
            "id": 28,
            "number": 28,
            "slideId": "slide-28",
            "title": {
              "en": "Fetching Data",
              "km": "Fetching Data"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/28"
          },
          {
            "id": 29,
            "number": 29,
            "slideId": "slide-29",
            "title": {
              "en": "Database Access",
              "km": "Database Access"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/29"
          },
          {
            "id": 30,
            "number": 30,
            "slideId": "slide-30",
            "title": {
              "en": "PostgreSQL & Cloud DBs",
              "km": "PostgreSQL & Cloud DBs"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/30"
          }
        ]
      },
      {
        "id": "nextjs-sec-11",
        "part": "SECTION 11 — RENDERING",
        "partKey": "",
        "title": {
          "en": "RENDERING",
          "km": "RENDERING"
        },
        "lessons": [
          {
            "id": 31,
            "number": 31,
            "slideId": "slide-31",
            "title": {
              "en": "Rendering in Next.js",
              "km": "Rendering in Next.js"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/31"
          },
          {
            "id": 32,
            "number": 32,
            "slideId": "slide-32",
            "title": {
              "en": "Static vs Dynamic",
              "km": "Static vs Dynamic"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/32"
          },
          {
            "id": 33,
            "number": 33,
            "slideId": "slide-33",
            "title": {
              "en": "Streaming & Suspense",
              "km": "Streaming & Suspense"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/33"
          }
        ]
      },
      {
        "id": "nextjs-sec-12",
        "part": "SECTION 12 — LOADING & ERRORS",
        "partKey": "",
        "title": {
          "en": "LOADING & ERRORS",
          "km": "LOADING & ERRORS"
        },
        "lessons": [
          {
            "id": 34,
            "number": 34,
            "slideId": "slide-34",
            "title": {
              "en": "loading.tsx",
              "km": "loading.tsx"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/34"
          },
          {
            "id": 35,
            "number": 35,
            "slideId": "slide-35",
            "title": {
              "en": "error.tsx",
              "km": "error.tsx"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/35"
          },
          {
            "id": 36,
            "number": 36,
            "slideId": "slide-36",
            "title": {
              "en": "notFound() & not-found.tsx",
              "km": "notFound() & not-found.tsx"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/36"
          }
        ]
      },
      {
        "id": "nextjs-sec-13",
        "part": "SECTION 13 — SERVER ACTIONS / MUTATIONS",
        "partKey": "",
        "title": {
          "en": "SERVER ACTIONS / MUTATIONS",
          "km": "SERVER ACTIONS / MUTATIONS"
        },
        "lessons": [
          {
            "id": 37,
            "number": 37,
            "slideId": "slide-37",
            "title": {
              "en": "Reading vs Changing Data",
              "km": "Reading vs Changing Data"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/37"
          },
          {
            "id": 38,
            "number": 38,
            "slideId": "slide-38",
            "title": {
              "en": "Server Action Concept",
              "km": "Server Action Concept"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/38"
          },
          {
            "id": 39,
            "number": 39,
            "slideId": "slide-39",
            "title": {
              "en": "Form + Server Action",
              "km": "Form + Server Action"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/39"
          }
        ]
      },
      {
        "id": "nextjs-sec-14",
        "part": "SECTION 14 — SEARCH & PAGINATION",
        "partKey": "",
        "title": {
          "en": "SEARCH & PAGINATION",
          "km": "SEARCH & PAGINATION"
        },
        "lessons": [
          {
            "id": 40,
            "number": 40,
            "slideId": "slide-40",
            "title": {
              "en": "URL Search Parameters",
              "km": "URL Search Parameters"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/40"
          }
        ]
      },
      {
        "id": "nextjs-sec-15",
        "part": "SECTION 15 — AUTHENTICATION",
        "partKey": "",
        "title": {
          "en": "AUTHENTICATION",
          "km": "AUTHENTICATION"
        },
        "lessons": [
          {
            "id": 41,
            "number": 41,
            "slideId": "slide-41",
            "title": {
              "en": "Authentication Architecture",
              "km": "Authentication Architecture"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/41"
          },
          {
            "id": 42,
            "number": 42,
            "slideId": "slide-42",
            "title": {
              "en": "Public vs Protected Routes",
              "km": "Public vs Protected Routes"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/42"
          }
        ]
      },
      {
        "id": "nextjs-sec-16",
        "part": "SECTION 16 — ENVIRONMENT VARIABLES",
        "partKey": "",
        "title": {
          "en": "ENVIRONMENT VARIABLES",
          "km": "ENVIRONMENT VARIABLES"
        },
        "lessons": [
          {
            "id": 43,
            "number": 43,
            "slideId": "slide-43",
            "title": {
              "en": "Environment Variables",
              "km": "Environment Variables"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/43"
          }
        ]
      },
      {
        "id": "nextjs-sec-17",
        "part": "SECTION 17 — SEO & METADATA",
        "partKey": "",
        "title": {
          "en": "SEO & METADATA",
          "km": "SEO & METADATA"
        },
        "lessons": [
          {
            "id": 44,
            "number": 44,
            "slideId": "slide-44",
            "title": {
              "en": "Metadata API",
              "km": "Metadata API"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/44"
          },
          {
            "id": 45,
            "number": 45,
            "slideId": "slide-45",
            "title": {
              "en": "SEO Best Practices",
              "km": "SEO Best Practices"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/45"
          }
        ]
      },
      {
        "id": "nextjs-sec-18",
        "part": "SECTION 18 — IMAGES & FONTS",
        "partKey": "",
        "title": {
          "en": "IMAGES & FONTS",
          "km": "IMAGES & FONTS"
        },
        "lessons": [
          {
            "id": 46,
            "number": 46,
            "slideId": "slide-46",
            "title": {
              "en": "next/image",
              "km": "next/image"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/46"
          },
          {
            "id": 47,
            "number": 47,
            "slideId": "slide-47",
            "title": {
              "en": "next/font",
              "km": "next/font"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/47"
          }
        ]
      },
      {
        "id": "nextjs-sec-19",
        "part": "SECTION 19 — API / BACKEND",
        "partKey": "",
        "title": {
          "en": "API / BACKEND",
          "km": "API / BACKEND"
        },
        "lessons": [
          {
            "id": 48,
            "number": 48,
            "slideId": "slide-48",
            "title": {
              "en": "Next.js as Full Stack",
              "km": "Next.js as Full Stack"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/48"
          },
          {
            "id": 49,
            "number": 49,
            "slideId": "slide-49",
            "title": {
              "en": "Route Handlers",
              "km": "Route Handlers"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/49"
          }
        ]
      },
      {
        "id": "nextjs-sec-20",
        "part": "SECTION 20 — SECURITY",
        "partKey": "",
        "title": {
          "en": "SECURITY",
          "km": "SECURITY"
        },
        "lessons": [
          {
            "id": 50,
            "number": 50,
            "slideId": "slide-50",
            "title": {
              "en": "Security Basics",
              "km": "Security Basics"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/50"
          },
          {
            "id": 51,
            "number": 51,
            "slideId": "slide-51",
            "title": {
              "en": "Client vs Server Security",
              "km": "Client vs Server Security"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/51"
          }
        ]
      },
      {
        "id": "nextjs-sec-21",
        "part": "SECTION 21 — PROJECT ARCHITECTURE",
        "partKey": "",
        "title": {
          "en": "PROJECT ARCHITECTURE",
          "km": "PROJECT ARCHITECTURE"
        },
        "lessons": [
          {
            "id": 52,
            "number": 52,
            "slideId": "slide-52",
            "title": {
              "en": "Real Application Structure",
              "km": "Real Application Structure"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/52"
          }
        ]
      },
      {
        "id": "nextjs-sec-22",
        "part": "SECTION 22 — BUILD A REAL PROJECT",
        "partKey": "",
        "title": {
          "en": "BUILD A REAL PROJECT",
          "km": "BUILD A REAL PROJECT"
        },
        "lessons": [
          {
            "id": 53,
            "number": 53,
            "slideId": "slide-53",
            "title": {
              "en": "TaskFlow Architecture",
              "km": "TaskFlow Architecture"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/53"
          },
          {
            "id": 54,
            "number": 54,
            "slideId": "slide-54",
            "title": {
              "en": "TaskFlow Routes",
              "km": "TaskFlow Routes"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/54"
          },
          {
            "id": 55,
            "number": 55,
            "slideId": "slide-55",
            "title": {
              "en": "TaskFlow Database",
              "km": "TaskFlow Database"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/55"
          },
          {
            "id": 56,
            "number": 56,
            "slideId": "slide-56",
            "title": {
              "en": "TaskFlow Data Flow",
              "km": "TaskFlow Data Flow"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/56"
          }
        ]
      },
      {
        "id": "nextjs-sec-23",
        "part": "SECTION 23 — PERFORMANCE",
        "partKey": "",
        "title": {
          "en": "PERFORMANCE",
          "km": "PERFORMANCE"
        },
        "lessons": [
          {
            "id": 57,
            "number": 57,
            "slideId": "slide-57",
            "title": {
              "en": "Why Next.js Can Be Fast",
              "km": "Why Next.js Can Be Fast"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/57"
          },
          {
            "id": 58,
            "number": 58,
            "slideId": "slide-58",
            "title": {
              "en": "Avoid Unnecessary Client Components",
              "km": "Avoid Unnecessary Client Components"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/58"
          }
        ]
      },
      {
        "id": "nextjs-sec-24",
        "part": "SECTION 24 — DEPLOYMENT",
        "partKey": "",
        "title": {
          "en": "DEPLOYMENT",
          "km": "DEPLOYMENT"
        },
        "lessons": [
          {
            "id": 59,
            "number": 59,
            "slideId": "slide-59",
            "title": {
              "en": "Production Build",
              "km": "Production Build"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/59"
          },
          {
            "id": 60,
            "number": 60,
            "slideId": "slide-60",
            "title": {
              "en": "GitHub Workflow",
              "km": "GitHub Workflow"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/60"
          },
          {
            "id": 61,
            "number": 61,
            "slideId": "slide-61",
            "title": {
              "en": "Vercel Deployment",
              "km": "Vercel Deployment"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/61"
          },
          {
            "id": 62,
            "number": 62,
            "slideId": "slide-62",
            "title": {
              "en": "Develop -> Preview -> Ship",
              "km": "Develop -> Preview -> Ship"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/62"
          }
        ]
      },
      {
        "id": "nextjs-sec-25",
        "part": "SECTION 25 — COMMON MISTAKES",
        "partKey": "",
        "title": {
          "en": "COMMON MISTAKES",
          "km": "COMMON MISTAKES"
        },
        "lessons": [
          {
            "id": 63,
            "number": 63,
            "slideId": "slide-63",
            "title": {
              "en": "Mistake: Everything Is Client",
              "km": "Mistake: Everything Is Client"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/63"
          },
          {
            "id": 64,
            "number": 64,
            "slideId": "slide-64",
            "title": {
              "en": "Mistake: Exposing Secrets",
              "km": "Mistake: Exposing Secrets"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/64"
          },
          {
            "id": 65,
            "number": 65,
            "slideId": "slide-65",
            "title": {
              "en": "Mistake: No Server Validation",
              "km": "Mistake: No Server Validation"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/65"
          },
          {
            "id": 66,
            "number": 66,
            "slideId": "slide-66",
            "title": {
              "en": "Mistake: Poor Folder Architecture",
              "km": "Mistake: Poor Folder Architecture"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/66"
          }
        ]
      },
      {
        "id": "nextjs-sec-26",
        "part": "SECTION 26 — DEBUGGING",
        "partKey": "",
        "title": {
          "en": "DEBUGGING",
          "km": "DEBUGGING"
        },
        "lessons": [
          {
            "id": 67,
            "number": 67,
            "slideId": "slide-67",
            "title": {
              "en": "Debugging Next.js",
              "km": "Debugging Next.js"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/67"
          },
          {
            "id": 68,
            "number": 68,
            "slideId": "slide-68",
            "title": {
              "en": "Common Errors & Fixes",
              "km": "Common Errors & Fixes"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/68"
          }
        ]
      },
      {
        "id": "nextjs-sec-27",
        "part": "SECTION 27 — FINAL ARCHITECTURE",
        "partKey": "",
        "title": {
          "en": "FINAL ARCHITECTURE",
          "km": "FINAL ARCHITECTURE"
        },
        "lessons": [
          {
            "id": 69,
            "number": 69,
            "slideId": "slide-69",
            "title": {
              "en": "Modern Next.js Architecture",
              "km": "Modern Next.js Architecture"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/69"
          }
        ]
      },
      {
        "id": "nextjs-sec-28",
        "part": "SECTION 28 — CHEAT SHEET",
        "partKey": "",
        "title": {
          "en": "CHEAT SHEET",
          "km": "CHEAT SHEET"
        },
        "lessons": [
          {
            "id": 70,
            "number": 70,
            "slideId": "slide-70",
            "title": {
              "en": "Next.js Commands Cheat Sheet",
              "km": "Next.js Commands Cheat Sheet"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/70"
          },
          {
            "id": 71,
            "number": 71,
            "slideId": "slide-71",
            "title": {
              "en": "Next.js Special Files",
              "km": "Next.js Special Files"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/71"
          },
          {
            "id": 72,
            "number": 72,
            "slideId": "slide-72",
            "title": {
              "en": "Next.js Core Concepts",
              "km": "Next.js Core Concepts"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/72"
          }
        ]
      },
      {
        "id": "nextjs-sec-29",
        "part": "SECTION 29 — FINAL CHALLENGE",
        "partKey": "",
        "title": {
          "en": "FINAL CHALLENGE",
          "km": "FINAL CHALLENGE"
        },
        "lessons": [
          {
            "id": 73,
            "number": 73,
            "slideId": "slide-73",
            "title": {
              "en": "Final Challenge: Build Your Own SaaS",
              "km": "Final Challenge: Build Your Own SaaS"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/73"
          },
          {
            "id": 74,
            "number": 74,
            "slideId": "slide-74",
            "title": {
              "en": "Development Roadmap",
              "km": "Development Roadmap"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/74"
          },
          {
            "id": 75,
            "number": 75,
            "slideId": "slide-75",
            "title": {
              "en": "Final Message",
              "km": "Final Message"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/nextjs/75"
          }
        ]
      }
    ]
  },
  {
    "id": "tailwindcss",
    "lessonKey": "l4",
    "module": "MODULE 04",
    "accent": "sky",
    "icon": "Palette",
    "category": "frontend",
    "title": {
      "en": "Tailwind CSS: Modern Utility-First Styling",
      "km": "Tailwind CSS: ការរចនារហ័សតាម Utility"
    },
    "desc": {
      "en": "Style clean, responsive, production interfaces without leaving your HTML. Learn utility classes, flexbox/grid layouts, responsive breakpoints, and dark mode.",
      "km": "រចនា UI ស្អាត ទាន់សម័យ និង Responsive ដោយផ្ទាល់ក្នុងកូដរបស់អ្នក។ ចេះប្រើ Utility Classes, Flexbox/Grid, Breakpoints និង Dark Mode។"
    },
    "totalLessons": 12,
    "sections": [
      {
        "id": "tailwindcss-sec-1",
        "part": "WELCOME",
        "partKey": "part_welcome",
        "title": {
          "en": "WELCOME",
          "km": "សូមស្វាគមន៍"
        },
        "lessons": [
          {
            "id": 1,
            "number": 1,
            "slideId": "slide-1",
            "title": {
              "en": "MODERN CSS",
              "km": "MODERN CSS"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/tailwindcss/1"
          }
        ]
      },
      {
        "id": "tailwindcss-sec-2",
        "part": "OVERVIEW",
        "partKey": "",
        "title": {
          "en": "OVERVIEW",
          "km": "OVERVIEW"
        },
        "lessons": [
          {
            "id": 2,
            "number": 2,
            "slideId": "slide-2",
            "title": {
              "en": "Why Utility-First CSS?",
              "km": "Why Utility-First CSS?"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/tailwindcss/2"
          }
        ]
      },
      {
        "id": "tailwindcss-sec-3",
        "part": "SETUP",
        "partKey": "",
        "title": {
          "en": "SETUP",
          "km": "SETUP"
        },
        "lessons": [
          {
            "id": 3,
            "number": 3,
            "slideId": "slide-3",
            "title": {
              "en": "Configuration & Setup",
              "km": "Configuration & Setup"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/tailwindcss/3"
          }
        ]
      },
      {
        "id": "tailwindcss-sec-4",
        "part": "UTILITIES",
        "partKey": "",
        "title": {
          "en": "UTILITIES",
          "km": "UTILITIES"
        },
        "lessons": [
          {
            "id": 4,
            "number": 4,
            "slideId": "slide-4",
            "title": {
              "en": "Sizing & Spacing System",
              "km": "Sizing & Spacing System"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/tailwindcss/4"
          }
        ]
      },
      {
        "id": "tailwindcss-sec-5",
        "part": "TYPOGRAPHY",
        "partKey": "",
        "title": {
          "en": "TYPOGRAPHY",
          "km": "TYPOGRAPHY"
        },
        "lessons": [
          {
            "id": 5,
            "number": 5,
            "slideId": "slide-5",
            "title": {
              "en": "Typography & Modern Colors",
              "km": "Typography & Modern Colors"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/tailwindcss/5"
          }
        ]
      },
      {
        "id": "tailwindcss-sec-6",
        "part": "LAYOUT",
        "partKey": "",
        "title": {
          "en": "LAYOUT",
          "km": "LAYOUT"
        },
        "lessons": [
          {
            "id": 6,
            "number": 6,
            "slideId": "slide-6",
            "title": {
              "en": "Flexbox & CSS Grid in Action",
              "km": "Flexbox & CSS Grid in Action"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/tailwindcss/6"
          }
        ]
      },
      {
        "id": "tailwindcss-sec-7",
        "part": "RESPONSIVE",
        "partKey": "",
        "title": {
          "en": "RESPONSIVE",
          "km": "RESPONSIVE"
        },
        "lessons": [
          {
            "id": 7,
            "number": 7,
            "slideId": "slide-7",
            "title": {
              "en": "Mobile-First Breakpoint Architecture",
              "km": "Mobile-First Breakpoint Architecture"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/tailwindcss/7"
          }
        ]
      },
      {
        "id": "tailwindcss-sec-8",
        "part": "STATES",
        "partKey": "",
        "title": {
          "en": "STATES",
          "km": "STATES"
        },
        "lessons": [
          {
            "id": 8,
            "number": 8,
            "slideId": "slide-8",
            "title": {
              "en": "Interactive Hover, Focus & Active States",
              "km": "Interactive Hover, Focus & Active States"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/tailwindcss/8"
          }
        ]
      },
      {
        "id": "tailwindcss-sec-9",
        "part": "DARK MODE",
        "partKey": "",
        "title": {
          "en": "DARK MODE",
          "km": "DARK MODE"
        },
        "lessons": [
          {
            "id": 9,
            "number": 9,
            "slideId": "slide-9",
            "title": {
              "en": "Tailwind Dark Mode Integration",
              "km": "Tailwind Dark Mode Integration"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/tailwindcss/9"
          }
        ]
      },
      {
        "id": "tailwindcss-sec-10",
        "part": "COMPONENTS",
        "partKey": "",
        "title": {
          "en": "COMPONENTS",
          "km": "COMPONENTS"
        },
        "lessons": [
          {
            "id": 10,
            "number": 10,
            "slideId": "slide-10",
            "title": {
              "en": "Reusable Component Extraction",
              "km": "Reusable Component Extraction"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/tailwindcss/10"
          }
        ]
      },
      {
        "id": "tailwindcss-sec-11",
        "part": "BEST PRACTICES",
        "partKey": "",
        "title": {
          "en": "BEST PRACTICES",
          "km": "BEST PRACTICES"
        },
        "lessons": [
          {
            "id": 11,
            "number": 11,
            "slideId": "slide-11",
            "title": {
              "en": "Tailwind Developer Best Practices",
              "km": "Tailwind Developer Best Practices"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/tailwindcss/11"
          }
        ]
      },
      {
        "id": "tailwindcss-sec-12",
        "part": "SUMMARY",
        "partKey": "",
        "title": {
          "en": "SUMMARY",
          "km": "SUMMARY"
        },
        "lessons": [
          {
            "id": 12,
            "number": 12,
            "slideId": "slide-12",
            "title": {
              "en": "Tailwind CSS Mastery Checklist",
              "km": "Tailwind CSS Mastery Checklist"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/tailwindcss/12"
          }
        ]
      }
    ]
  },
  {
    "id": "shadcn",
    "lessonKey": "l5",
    "module": "MODULE 05",
    "accent": "zinc",
    "icon": "Layers",
    "category": "frontend",
    "title": {
      "en": "Shadcn UI: Accessible Component Architecture",
      "km": "Shadcn UI: សមាសភាគ Component ទំនើប"
    },
    "desc": {
      "en": "Assemble accessible, production-grade component systems using Radix UI primitives, Tailwind CSS, and the modern CLI. Customize design tokens with ease.",
      "km": "ផ្គុំបណ្ដុំ UI Components ដែលមានភាពងាយស្រួលប្រើប្រាស់ (Accessible) ដោយប្រើ Radix UI Primitives, Tailwind CSS និង CLI។ កែសម្រួល Theme បានយ៉ាងងាយ។"
    },
    "totalLessons": 12,
    "sections": [
      {
        "id": "shadcn-sec-1",
        "part": "WELCOME",
        "partKey": "part_welcome",
        "title": {
          "en": "WELCOME",
          "km": "សូមស្វាគមន៍"
        },
        "lessons": [
          {
            "id": 1,
            "number": 1,
            "slideId": "slide-1",
            "title": {
              "en": "COMPONENT ARCHITECTURE",
              "km": "COMPONENT ARCHITECTURE"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/shadcn/1"
          }
        ]
      },
      {
        "id": "shadcn-sec-2",
        "part": "OVERVIEW",
        "partKey": "",
        "title": {
          "en": "OVERVIEW",
          "km": "OVERVIEW"
        },
        "lessons": [
          {
            "id": 2,
            "number": 2,
            "slideId": "slide-2",
            "title": {
              "en": "What Makes Shadcn UI Different?",
              "km": "What Makes Shadcn UI Different?"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/shadcn/2"
          }
        ]
      },
      {
        "id": "shadcn-sec-3",
        "part": "ARCHITECTURE",
        "partKey": "",
        "title": {
          "en": "ARCHITECTURE",
          "km": "ARCHITECTURE"
        },
        "lessons": [
          {
            "id": 3,
            "number": 3,
            "slideId": "slide-3",
            "title": {
              "en": "The Three Pillars of Shadcn UI",
              "km": "The Three Pillars of Shadcn UI"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/shadcn/3"
          }
        ]
      },
      {
        "id": "shadcn-sec-4",
        "part": "SETUP",
        "partKey": "",
        "title": {
          "en": "SETUP",
          "km": "SETUP"
        },
        "lessons": [
          {
            "id": 4,
            "number": 4,
            "slideId": "slide-4",
            "title": {
              "en": "Initializing Shadcn UI",
              "km": "Initializing Shadcn UI"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/shadcn/4"
          }
        ]
      },
      {
        "id": "shadcn-sec-5",
        "part": "UTILITIES",
        "partKey": "",
        "title": {
          "en": "UTILITIES",
          "km": "UTILITIES"
        },
        "lessons": [
          {
            "id": 5,
            "number": 5,
            "slideId": "slide-5",
            "title": {
              "en": "The cn() Utility & Class Merging",
              "km": "The cn() Utility & Class Merging"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/shadcn/5"
          }
        ]
      },
      {
        "id": "shadcn-sec-6",
        "part": "COMPONENTS",
        "partKey": "",
        "title": {
          "en": "COMPONENTS",
          "km": "COMPONENTS"
        },
        "lessons": [
          {
            "id": 6,
            "number": 6,
            "slideId": "slide-6",
            "title": {
              "en": "Adding Components via CLI",
              "km": "Adding Components via CLI"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/shadcn/6"
          }
        ]
      },
      {
        "id": "shadcn-sec-7",
        "part": "BUTTON",
        "partKey": "",
        "title": {
          "en": "BUTTON",
          "km": "BUTTON"
        },
        "lessons": [
          {
            "id": 7,
            "number": 7,
            "slideId": "slide-7",
            "title": {
              "en": "The Button Component & Variants",
              "km": "The Button Component & Variants"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/shadcn/7"
          }
        ]
      },
      {
        "id": "shadcn-sec-8",
        "part": "CARD",
        "partKey": "",
        "title": {
          "en": "CARD",
          "km": "CARD"
        },
        "lessons": [
          {
            "id": 8,
            "number": 8,
            "slideId": "slide-8",
            "title": {
              "en": "Card Component Architecture",
              "km": "Card Component Architecture"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/shadcn/8"
          }
        ]
      },
      {
        "id": "shadcn-sec-9",
        "part": "MODALS",
        "partKey": "",
        "title": {
          "en": "MODALS",
          "km": "MODALS"
        },
        "lessons": [
          {
            "id": 9,
            "number": 9,
            "slideId": "slide-9",
            "title": {
              "en": "Accessible Dialogs & Overlays",
              "km": "Accessible Dialogs & Overlays"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/shadcn/9"
          }
        ]
      },
      {
        "id": "shadcn-sec-10",
        "part": "THEMING",
        "partKey": "",
        "title": {
          "en": "THEMING",
          "km": "THEMING"
        },
        "lessons": [
          {
            "id": 10,
            "number": 10,
            "slideId": "slide-10",
            "title": {
              "en": "Theming & CSS Variables",
              "km": "Theming & CSS Variables"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/shadcn/10"
          }
        ]
      },
      {
        "id": "shadcn-sec-11",
        "part": "COMPOSITION",
        "partKey": "",
        "title": {
          "en": "COMPOSITION",
          "km": "COMPOSITION"
        },
        "lessons": [
          {
            "id": 11,
            "number": 11,
            "slideId": "slide-11",
            "title": {
              "en": "Putting It Together: Full Widget",
              "km": "Putting It Together: Full Widget"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/shadcn/11"
          }
        ]
      },
      {
        "id": "shadcn-sec-12",
        "part": "SUMMARY",
        "partKey": "",
        "title": {
          "en": "SUMMARY",
          "km": "SUMMARY"
        },
        "lessons": [
          {
            "id": 12,
            "number": 12,
            "slideId": "slide-12",
            "title": {
              "en": "Slide 12",
              "km": "Slide 12"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/shadcn/12"
          }
        ]
      }
    ]
  },
  {
    "id": "postgres",
    "lessonKey": "l6",
    "module": "MODULE 06",
    "accent": "blue",
    "icon": "Database",
    "category": "backend",
    "title": {
      "en": "PostgreSQL & Neon Database",
      "km": "PostgreSQL & Neon Database"
    },
    "desc": {
      "en": "Master relational database architecture, psql CLI, data modeling, indexes, ACID transactions, migrations, and serverless PostgreSQL with Neon branching.",
      "km": "ស្វែងយល់អំពីរចនាសម្ព័ន្ធ Relational Database, កម្មវិធី psql CLI, ការរចនា Schema, Indexes, ACID Transactions, Migrations, និង Serverless Postgres ជាមួយ Neon Branching។"
    },
    "totalLessons": 72,
    "sections": [
      {
        "id": "postgres-sec-1",
        "part": "SECTION 01: INTRODUCTION",
        "partKey": "",
        "title": {
          "en": "INTRODUCTION",
          "km": "INTRODUCTION"
        },
        "lessons": [
          {
            "id": 1,
            "number": 1,
            "slideId": "slide-1",
            "title": {
              "en": "PostgreSQL & Neon Database",
              "km": "PostgreSQL & Neon Database"
            },
            "subtitle": {
              "en": "From Database Fundamentals to Modern Fullstack Web Architecture",
              "km": "ពីមូលដ្ឋានគ្រឹះ Database រហូតដល់ស្ថាបត្យកម្ម Fullstack Web ក្នុង Production"
            },
            "href": "#/docs/postgres/1"
          },
          {
            "id": 2,
            "number": 2,
            "slideId": "slide-2",
            "title": {
              "en": "What is a Database?",
              "km": "តើអ្វីទៅជា Database?"
            },
            "subtitle": {
              "en": "Why modern web applications cannot survive on text files or memory alone",
              "km": "ហេតុអ្វី Web Application មិនអាចពឹងផ្អែកតែលើ File ឬ Memory បាន?"
            },
            "href": "#/docs/postgres/2"
          },
          {
            "id": 3,
            "number": 3,
            "slideId": "slide-3",
            "title": {
              "en": "SQL vs NoSQL: Why PostgreSQL?",
              "km": "SQL ទល់នឹង NoSQL៖ ហេតុអ្វី PostgreSQL?"
            },
            "subtitle": {
              "en": "Relational rigor meets modern document flexibility",
              "km": "ភាពរឹងមាំនៃ Relational រួមបញ្ចូលជាមួយភាពបត់បែននៃ Document"
            },
            "href": "#/docs/postgres/3"
          }
        ]
      },
      {
        "id": "postgres-sec-2",
        "part": "SECTION 02: DATABASE FUNDAMENTALS",
        "partKey": "",
        "title": {
          "en": "DATABASE FUNDAMENTALS",
          "km": "DATABASE FUNDAMENTALS"
        },
        "lessons": [
          {
            "id": 4,
            "number": 4,
            "slideId": "slide-4",
            "title": {
              "en": "Database Mental Model & Hierarchy",
              "km": "គំរូ និងឋានានុក្រមនៃ Database"
            },
            "subtitle": {
              "en": "Understanding the organizational layers from server to record",
              "km": "ស្វែងយល់អំពីរចនាសម្ព័ន្ធពី Server រហូតដល់ជួរទិន្នន័យនីមួយៗ"
            },
            "href": "#/docs/postgres/4"
          },
          {
            "id": 5,
            "number": 5,
            "slideId": "slide-5",
            "title": {
              "en": "Relational Architecture in Action",
              "km": "រចនាសម្ព័ន្ធ Relational ជាក់ស្តែង"
            },
            "subtitle": {
              "en": "Visualizing connected entities: Users, Posts, and Comments",
              "km": "ការបង្ហាញទំនាក់ទំនងរវាងតារាង Users, Posts និង Comments"
            },
            "href": "#/docs/postgres/5"
          }
        ]
      },
      {
        "id": "postgres-sec-3",
        "part": "SECTION 03: LOCAL INSTALLATION",
        "partKey": "",
        "title": {
          "en": "LOCAL INSTALLATION",
          "km": "LOCAL INSTALLATION"
        },
        "lessons": [
          {
            "id": 6,
            "number": 6,
            "slideId": "slide-6",
            "title": {
              "en": "Installing PostgreSQL Locally",
              "km": "ការដំឡើង PostgreSQL លើម៉ាស៊ីនផ្ទាល់"
            },
            "subtitle": {
              "en": "Setting up the server environment on Linux / Ubuntu",
              "km": "ការរៀបចំបរិស្ថាន Server លើប្រព័ន្ធប្រតិបត្តិការ Linux / Ubuntu"
            },
            "href": "#/docs/postgres/6"
          },
          {
            "id": 7,
            "number": 7,
            "slideId": "slide-7",
            "title": {
              "en": "PostgreSQL Service Management",
              "km": "ការគ្រប់គ្រង PostgreSQL Service"
            },
            "subtitle": {
              "en": "Controlling the background systemd daemon",
              "km": "ការបញ្ជា Daemon តាមរយៈប្រព័ន្ធ systemd"
            },
            "href": "#/docs/postgres/7"
          }
        ]
      },
      {
        "id": "postgres-sec-4",
        "part": "SECTION 04: PSQL CLI",
        "partKey": "",
        "title": {
          "en": "PSQL CLI",
          "km": "PSQL CLI"
        },
        "lessons": [
          {
            "id": 8,
            "number": 8,
            "slideId": "slide-8",
            "title": {
              "en": "The psql Interactive Terminal",
              "km": "កម្មវិធី psql Interactive Terminal"
            },
            "subtitle": {
              "en": "Connecting to the database engine from your command line",
              "km": "ការភ្ជាប់ទៅកាន់ PostgreSQL Server តាមរយៈ Command Line"
            },
            "href": "#/docs/postgres/8"
          },
          {
            "id": 9,
            "number": 9,
            "slideId": "slide-9",
            "title": {
              "en": "psql Connection Parameters",
              "km": "ប៉ារ៉ាម៉ែត្រភ្ជាប់របស់ psql"
            },
            "subtitle": {
              "en": "Deconstructing connection flags: -h, -p, -U, -d",
              "km": "ស្វែងយល់ពី Flags សំខាន់ៗ៖ -h, -p, -U, -d"
            },
            "href": "#/docs/postgres/9"
          }
        ]
      },
      {
        "id": "postgres-sec-5",
        "part": "SECTION 05: IMPORTANT PSQL COMMANDS",
        "partKey": "",
        "title": {
          "en": "IMPORTANT PSQL COMMANDS",
          "km": "IMPORTANT PSQL COMMANDS"
        },
        "lessons": [
          {
            "id": 10,
            "number": 10,
            "slideId": "slide-10",
            "title": {
              "en": "Essential psql Meta-Commands",
              "km": "ពាក្យបញ្ជា Meta-Commands ចាំបាច់ក្នុង psql"
            },
            "subtitle": {
              "en": "Navigating databases and schemas without writing long SQL queries",
              "km": "រុករក Databases និងពិនិត្យ Schemas យ៉ាងរហ័សដោយមិនបាច់សរសេរ SQL វែងៗ"
            },
            "href": "#/docs/postgres/10"
          },
          {
            "id": 11,
            "number": 11,
            "slideId": "slide-11",
            "title": {
              "en": "System & Environment Inspection",
              "km": "ការត្រួតពិនិត្យប្រព័ន្ធ និង Session"
            },
            "subtitle": {
              "en": "Checking database version, active database, and query timing",
              "km": "ពិនិត្យមើល Version ឈ្មោះ Database បច្ចុប្បន្ន និងរយៈពេលដំណើរការ Query"
            },
            "href": "#/docs/postgres/11"
          },
          {
            "id": 12,
            "number": 12,
            "slideId": "slide-12",
            "title": {
              "en": "Interactive psql Terminal Simulation",
              "km": "ការក្លែងធ្វើ Terminal psql អន្តរកម្ម"
            },
            "subtitle": {
              "en": "Click commands below to test authentic psql outputs",
              "km": "ចុចលើពាក្យបញ្ជាខាងក្រោមដើម្បីសាកល្បងលទ្ធផលជាក់ស្តែង"
            },
            "href": "#/docs/postgres/12"
          }
        ]
      },
      {
        "id": "postgres-sec-6",
        "part": "SECTION 06: CREATE &amp; DROP DATABASE",
        "partKey": "",
        "title": {
          "en": "CREATE & DROP DATABASE",
          "km": "CREATE & DROP DATABASE"
        },
        "lessons": [
          {
            "id": 13,
            "number": 13,
            "slideId": "slide-13",
            "title": {
              "en": "Creating & Dropping Databases",
              "km": "ការបង្កើត និងលុប Database"
            },
            "subtitle": {
              "en": "Provisioning databases and critical production precautions",
              "km": "ការបង្កើតមូលដ្ឋានទិន្នន័យ និងការប្រុងប្រយ័ត្នខ្ពស់ក្នុង Production"
            },
            "href": "#/docs/postgres/13"
          }
        ]
      },
      {
        "id": "postgres-sec-7",
        "part": "SECTION 07: SQL FUNDAMENTALS",
        "partKey": "",
        "title": {
          "en": "SQL FUNDAMENTALS",
          "km": "SQL FUNDAMENTALS"
        },
        "lessons": [
          {
            "id": 14,
            "number": 14,
            "slideId": "slide-14",
            "title": {
              "en": "DDL: Creating Tables with Constraints",
              "km": "DDL៖ ការបង្កើត Table ជាមួយ Constraints"
            },
            "subtitle": {
              "en": "Defining solid table schemas with data integrity guarantees",
              "km": "កំណត់រចនាសម្ព័ន្ធ Table រឹងមាំជាមួយការធានាភាពត្រឹមត្រូវនៃទិន្នន័យ"
            },
            "href": "#/docs/postgres/14"
          },
          {
            "id": 15,
            "number": 15,
            "slideId": "slide-15",
            "title": {
              "en": "DML: Inserting & Querying Records",
              "km": "DML៖ ការបញ្ចូល និងទាញយកទិន្នន័យ"
            },
            "subtitle": {
              "en": "Writing records and executing filtered SELECT queries",
              "km": "ការសរសេរ Record ចូល និងការប្រើ SELECT ជាមួយលក្ខខណ្ឌច្បាស់លាស់"
            },
            "href": "#/docs/postgres/15"
          },
          {
            "id": 16,
            "number": 16,
            "slideId": "slide-16",
            "title": {
              "en": "DML: Updating & Deleting Records",
              "km": "DML៖ ការកែប្រែ និងលុបទិន្នន័យ"
            },
            "subtitle": {
              "en": "Modifying data safely and the critical danger of missing WHERE clauses",
              "km": "ការកែប្រែទិន្នន័យដោយសុវត្ថិភាព និងគ្រោះថ្នាក់នៃការភ្លេចលក្ខខណ្ឌ WHERE"
            },
            "href": "#/docs/postgres/16"
          }
        ]
      },
      {
        "id": "postgres-sec-8",
        "part": "SECTION 08: POSTGRESQL DATA TYPES",
        "partKey": "",
        "title": {
          "en": "POSTGRESQL DATA TYPES",
          "km": "POSTGRESQL DATA TYPES"
        },
        "lessons": [
          {
            "id": 17,
            "number": 17,
            "slideId": "slide-17",
            "title": {
              "en": "Core PostgreSQL Data Types",
              "km": "ប្រភេទ Data Types សំខាន់ៗក្នុង PostgreSQL"
            },
            "subtitle": {
              "en": "Choosing the optimal type for storage efficiency and data precision",
              "km": "ការជ្រើសរើសប្រភេទ Data Type ត្រឹមត្រូវដើម្បីសន្សំទំហំ និងរក្សាភាពជាក់លាក់"
            },
            "href": "#/docs/postgres/17"
          },
          {
            "id": 18,
            "number": 18,
            "slideId": "slide-18",
            "title": {
              "en": "Timestamps: TIMESTAMP vs TIMESTAMPTZ",
              "km": "Timestamp៖ TIMESTAMP ទល់នឹង TIMESTAMPTZ"
            },
            "subtitle": {
              "en": "Why you should almost always use TIMESTAMPTZ in modern web apps",
              "km": "ហេតុអ្វីអ្នកគួរប្រើ TIMESTAMPTZ ស្ទើរតែគ្រប់ករណីក្នុង Web App ទំនើប"
            },
            "href": "#/docs/postgres/18"
          },
          {
            "id": 19,
            "number": 19,
            "slideId": "slide-19",
            "title": {
              "en": "JSONB: Semi-Structured Power",
              "km": "JSONB៖ អំណាចនៃទិន្នន័យ Semi-Structured"
            },
            "subtitle": {
              "en": "Storing, indexing, and querying JSON inside relational tables",
              "km": "ការផ្ទុក ការធ្វើ Index និងការស្វែងរកទិន្នន័យ JSON ក្នុងតារាង Relational"
            },
            "href": "#/docs/postgres/19"
          }
        ]
      },
      {
        "id": "postgres-sec-9",
        "part": "SECTION 09: PRIMARY KEYS &amp; UUID",
        "partKey": "",
        "title": {
          "en": "PRIMARY KEYS & UUID",
          "km": "PRIMARY KEYS & UUID"
        },
        "lessons": [
          {
            "id": 20,
            "number": 20,
            "slideId": "slide-20",
            "title": {
              "en": "Primary Keys: BIGSERIAL vs UUID",
              "km": "Primary Key៖ BIGSERIAL ទល់នឹង UUID"
            },
            "subtitle": {
              "en": "Comparing auto-incrementing sequential integers with distributed UUIDs",
              "km": "ប្រៀបធៀបលេខរៀងកើនស្វ័យប្រវត្តិជាមួយលេខកូដសម្គាល់ UUID សកល"
            },
            "href": "#/docs/postgres/20"
          },
          {
            "id": 21,
            "number": 21,
            "slideId": "slide-21",
            "title": {
              "en": "Generating UUIDs & Tradeoffs",
              "km": "ការបង្កើត UUID និងការវាយតម្លៃល្បឿន"
            },
            "subtitle": {
              "en": "Using gen_random_uuid() and understanding B-Tree page fragmentation",
              "km": "ការប្រើប្រាស់ gen_random_uuid() និងផលប៉ះពាល់លើ B-Tree Index"
            },
            "href": "#/docs/postgres/21"
          }
        ]
      },
      {
        "id": "postgres-sec-10",
        "part": "SECTION 10: RELATIONSHIPS",
        "partKey": "",
        "title": {
          "en": "RELATIONSHIPS",
          "km": "RELATIONSHIPS"
        },
        "lessons": [
          {
            "id": 22,
            "number": 22,
            "slideId": "slide-22",
            "title": {
              "en": "Database Relationships & Cardinality",
              "km": "ទំនាក់ទំនងក្នុង Database (Cardinality)"
            },
            "subtitle": {
              "en": "Modeling 1-to-1, 1-to-Many, and Many-to-Many associations",
              "km": "ការរចនាទំនាក់ទំនង 1-to-1, 1-to-Many និង Many-to-Many"
            },
            "href": "#/docs/postgres/22"
          },
          {
            "id": 23,
            "number": 23,
            "slideId": "slide-23",
            "title": {
              "en": "Foreign Keys & Referential Integrity",
              "km": "Foreign Keys និងសុវត្ថិភាពទិន្នន័យ"
            },
            "subtitle": {
              "en": "Enforcing relational constraints with ON DELETE rules",
              "km": "ការការពារភាពត្រឹមត្រូវនៃទិន្នន័យជាមួយលក្ខខណ្ឌ ON DELETE"
            },
            "href": "#/docs/postgres/23"
          }
        ]
      },
      {
        "id": "postgres-sec-11",
        "part": "SECTION 11: SQL JOINS",
        "partKey": "",
        "title": {
          "en": "SQL JOINS",
          "km": "SQL JOINS"
        },
        "lessons": [
          {
            "id": 24,
            "number": 24,
            "slideId": "slide-24",
            "title": {
              "en": "Visualizing SQL Joins",
              "km": "រូបភាពនៃការតភ្ជាប់ SQL Joins"
            },
            "subtitle": {
              "en": "Combining data across multiple tables in a single query",
              "km": "ការផ្គុំទិន្នន័យពីតារាងច្រើនក្នុង Query តែមួយ"
            },
            "href": "#/docs/postgres/24"
          },
          {
            "id": 25,
            "number": 25,
            "slideId": "slide-25",
            "title": {
              "en": "Practical Multi-Table Queries",
              "km": "ការ Query លើតារាងច្រើនជាក់ស្តែង"
            },
            "subtitle": {
              "en": "Fetching users, their posts, and counting comments with GROUP BY",
              "km": "ទាញយក Users, Posts និងរាប់ចំនួន Comments តាមរយៈ GROUP BY"
            },
            "href": "#/docs/postgres/25"
          }
        ]
      },
      {
        "id": "postgres-sec-12",
        "part": "SECTION 12: INDEXES",
        "partKey": "",
        "title": {
          "en": "INDEXES",
          "km": "INDEXES"
        },
        "lessons": [
          {
            "id": 26,
            "number": 26,
            "slideId": "slide-26",
            "title": {
              "en": "What is a Database Index?",
              "km": "តើអ្វីទៅជា Database Index?"
            },
            "subtitle": {
              "en": "Speeding up query reads with B-Tree data structures",
              "km": "បង្កើនល្បឿនស្វែងរកទិន្នន័យតាមរយៈរចនាសម្ព័ន្ធ B-Tree"
            },
            "href": "#/docs/postgres/26"
          },
          {
            "id": 27,
            "number": 27,
            "slideId": "slide-27",
            "title": {
              "en": "EXPLAIN & EXPLAIN ANALYZE",
              "km": "EXPLAIN និង EXPLAIN ANALYZE"
            },
            "subtitle": {
              "en": "Measuring query planning and identifying execution bottlenecks",
              "km": "វាស់ស្ទង់ផែនការ Query និងស្វែងរកចំណុចស្ទះនៃល្បឿន"
            },
            "href": "#/docs/postgres/27"
          }
        ]
      },
      {
        "id": "postgres-sec-13",
        "part": "SECTION 13: TRANSACTIONS &amp; ACID",
        "partKey": "",
        "title": {
          "en": "TRANSACTIONS & ACID",
          "km": "TRANSACTIONS & ACID"
        },
        "lessons": [
          {
            "id": 28,
            "number": 28,
            "slideId": "slide-28",
            "title": {
              "en": "Transactions & ACID Guarantees",
              "km": "ស្វែងយល់អំពីលក្ខណៈសម្បត្តិ ACID"
            },
            "subtitle": {
              "en": "The four pillars of reliable, enterprise-grade data management",
              "km": "សសរស្តម្ភទាំង ៤ សម្រាប់ប្រព័ន្ធទិន្នន័យដែលមានទំនុកចិត្តកម្រិតសហគ្រាស"
            },
            "href": "#/docs/postgres/28"
          },
          {
            "id": 29,
            "number": 29,
            "slideId": "slide-29",
            "title": {
              "en": "Transaction Workflow in Action",
              "km": "ដំណើរការ Transaction ជាក់ស្តែង"
            },
            "subtitle": {
              "en": "BEGIN, COMMIT, and ROLLBACK in banking and payment processing",
              "km": "ការប្រើ BEGIN, COMMIT និង ROLLBACK ក្នុងប្រព័ន្ធផ្ទេរប្រាក់"
            },
            "href": "#/docs/postgres/29"
          }
        ]
      },
      {
        "id": "postgres-sec-14",
        "part": "SECTION 14: DATABASE DESIGN",
        "partKey": "",
        "title": {
          "en": "DATABASE DESIGN",
          "km": "DATABASE DESIGN"
        },
        "lessons": [
          {
            "id": 30,
            "number": 30,
            "slideId": "slide-30",
            "title": {
              "en": "Database Normalization (1NF to 3NF)",
              "km": "Database Normalization (1NF ដល់ 3NF)"
            },
            "subtitle": {
              "en": "Eliminating redundancy while keeping queries clean and maintainable",
              "km": "លុបបំបាត់ទិន្នន័យស្ទួន និងរក្សារចនាសម្ព័ន្ធឱ្យស្អាត ងាយថែទាំ"
            },
            "href": "#/docs/postgres/30"
          },
          {
            "id": 31,
            "number": 31,
            "slideId": "slide-31",
            "title": {
              "en": "Production Schema Conventions",
              "km": "ស្តង់ដារកំណត់ឈ្មោះក្នុង Production"
            },
            "subtitle": {
              "en": "Clean naming rules, audit fields, and column constraints",
              "km": "របៀបសរសេរឈ្មោះឱ្យមានរបៀប និង Column សម្រាប់សវនកម្ម (Audit)"
            },
            "href": "#/docs/postgres/31"
          }
        ]
      },
      {
        "id": "postgres-sec-15",
        "part": "SECTION 15: MIGRATIONS",
        "partKey": "",
        "title": {
          "en": "MIGRATIONS",
          "km": "MIGRATIONS"
        },
        "lessons": [
          {
            "id": 32,
            "number": 32,
            "slideId": "slide-32",
            "title": {
              "en": "What are Database Migrations?",
              "km": "តើអ្វីទៅជា Database Migrations?"
            },
            "subtitle": {
              "en": "Version-controlling schema evolution across teams and environments",
              "km": "ការគ្រប់គ្រងកំណែប្រែ (Version Control) នៃ Schema ក្នុងការងារជាក្រុម"
            },
            "href": "#/docs/postgres/32"
          },
          {
            "id": 33,
            "number": 33,
            "slideId": "slide-33",
            "title": {
              "en": "Writing Safe Production Migrations",
              "km": "ការសរសេរ Migration ឱ្យមានសុវត្ថិភាព"
            },
            "subtitle": {
              "en": "Executing ALTER TABLE without locking tables or breaking production",
              "km": "ការប្រើ ALTER TABLE ដោយមិនធ្វើឱ្យគាំង Table ឬដាច់ប្រព័ន្ធ"
            },
            "href": "#/docs/postgres/33"
          }
        ]
      },
      {
        "id": "postgres-sec-16",
        "part": "SECTION 16: BACKUPS &amp; RESTORE",
        "partKey": "",
        "title": {
          "en": "BACKUPS & RESTORE",
          "km": "BACKUPS & RESTORE"
        },
        "lessons": [
          {
            "id": 34,
            "number": 34,
            "slideId": "slide-34",
            "title": {
              "en": "PostgreSQL Backups: pg_dump & Restore",
              "km": "ការ Backup ក្នុង PostgreSQL៖ pg_dump & Restore"
            },
            "subtitle": {
              "en": "Creating logical SQL dumps and restoring them with psql",
              "km": "ការទាញយកទិន្នន័យជាឯកសារ SQL និងការបញ្ចូលមកវិញដោយសុវត្ថិភាព"
            },
            "href": "#/docs/postgres/34"
          },
          {
            "id": 35,
            "number": 35,
            "slideId": "slide-35",
            "title": {
              "en": "Disaster Recovery Best Practices",
              "km": "ការត្រៀមបង្ការគ្រោះមហន្តរាយ (Disaster Recovery)"
            },
            "subtitle": {
              "en": "Why an untested backup cannot be trusted in production",
              "km": "ហេតុអ្វីឯកសារ Backup ដែលមិនធ្លាប់ Restore សាកល្បង មិនអាចទុកចិត្តបាន?"
            },
            "href": "#/docs/postgres/35"
          }
        ]
      },
      {
        "id": "postgres-sec-17",
        "part": "SECTION 17: USERS &amp; PERMISSIONS",
        "partKey": "",
        "title": {
          "en": "USERS & PERMISSIONS",
          "km": "USERS & PERMISSIONS"
        },
        "lessons": [
          {
            "id": 36,
            "number": 36,
            "slideId": "slide-36",
            "title": {
              "en": "PostgreSQL Roles & Permissions",
              "km": "Roles និងការបែងចែកសិទ្ធិក្នុង PostgreSQL"
            },
            "subtitle": {
              "en": "Enforcing the principle of least privilege in production",
              "km": "ការអនុវត្តគោលការណ៍ផ្តល់សិទ្ធិតិចបំផុត (Least Privilege)"
            },
            "href": "#/docs/postgres/36"
          }
        ]
      },
      {
        "id": "postgres-sec-18",
        "part": "SECTION 18: WHAT IS NEON?",
        "partKey": "",
        "title": {
          "en": "WHAT IS NEON?",
          "km": "WHAT IS NEON?"
        },
        "lessons": [
          {
            "id": 37,
            "number": 37,
            "slideId": "slide-37",
            "title": {
              "en": "Neon: Serverless PostgreSQL Platform",
              "km": "Neon៖ ប្រព័ន្ធ Serverless PostgreSQL"
            },
            "subtitle": {
              "en": "Separating compute from storage for modern cloud development",
              "km": "ការបំបែក Compute ចេញពី Storage សម្រាប់ Cloud Development ទំនើប"
            },
            "href": "#/docs/postgres/37"
          },
          {
            "id": 38,
            "number": 38,
            "slideId": "slide-38",
            "title": {
              "en": "Traditional Postgres vs Neon Architecture",
              "km": "ស្ថាបត្យកម្ម Postgres ធម្មតា ទល់នឹង Neon"
            },
            "subtitle": {
              "en": "Monolithic local disk vs cloud storage pageservers & distributed WAL",
              "km": "ការប្រៀបធៀបរវាង Hard Disk នៅជាប់ម៉ាស៊ីន និង Cloud Storage Pageserver"
            },
            "href": "#/docs/postgres/38"
          },
          {
            "id": 39,
            "number": 39,
            "slideId": "slide-39",
            "title": {
              "en": "Neon Core Features",
              "km": "លក្ខណៈពិសេសចម្បងរបស់ Neon"
            },
            "subtitle": {
              "en": "Scale-to-zero, autoscaling, and connection pooling",
              "km": "Scale-to-zero, Autoscaling និង Connection Pooling"
            },
            "href": "#/docs/postgres/39"
          }
        ]
      },
      {
        "id": "postgres-sec-19",
        "part": "SECTION 19: CREATE A NEON DATABASE",
        "partKey": "",
        "title": {
          "en": "CREATE A NEON DATABASE",
          "km": "CREATE A NEON DATABASE"
        },
        "lessons": [
          {
            "id": 40,
            "number": 40,
            "slideId": "slide-40",
            "title": {
              "en": "Creating a Neon Project",
              "km": "ការបង្កើត Project ក្នុង Neon"
            },
            "subtitle": {
              "en": "The step-by-step cloud provisioning workflow",
              "km": "ជំហានជាក់ស្តែងក្នុងការបង្កើត Cloud Database"
            },
            "href": "#/docs/postgres/40"
          }
        ]
      },
      {
        "id": "postgres-sec-20",
        "part": "SECTION 20: NEON CONNECTION STRING",
        "partKey": "",
        "title": {
          "en": "NEON CONNECTION STRING",
          "km": "NEON CONNECTION STRING"
        },
        "lessons": [
          {
            "id": 41,
            "number": 41,
            "slideId": "slide-41",
            "title": {
              "en": "Deconstructing the Connection String",
              "km": "ការវិភាគ Connection String របស់ Neon"
            },
            "subtitle": {
              "en": "Understanding credentials, endpoint host, database, and SSL",
              "km": "ស្វែងយល់អំពី Credentials, Endpoint Host, Database និងលក្ខខណ្ឌ SSL"
            },
            "href": "#/docs/postgres/41"
          }
        ]
      },
      {
        "id": "postgres-sec-21",
        "part": "SECTION 21: NEON BRANCHING",
        "partKey": "",
        "title": {
          "en": "NEON BRANCHING",
          "km": "NEON BRANCHING"
        },
        "lessons": [
          {
            "id": 42,
            "number": 42,
            "slideId": "slide-42",
            "title": {
              "en": "Instant Database Branching",
              "km": "ការបំបែកមែកធាង Database Branching"
            },
            "subtitle": {
              "en": "Git-like copy-on-write branching for your database data and schema",
              "km": "ការបង្កើត Branch ដូច Git ជាមួយបច្ចេកវិទ្យា Copy-on-write ក្នុងរយៈពេលប៉ុន្មានវិនាទី"
            },
            "href": "#/docs/postgres/42"
          },
          {
            "id": 43,
            "number": 43,
            "slideId": "slide-43",
            "title": {
              "en": "Branching Development Lifecycle",
              "km": "វដ្តជីវិតនៃការអភិវឌ្ឍជាមួយ Branching"
            },
            "subtitle": {
              "en": "Testing risky migrations against real data with zero production risk",
              "km": "ការសាកល្បង Migration លើទិន្នន័យពិតប្រាកដដោយគ្មានហានិភ័យដល់ Production"
            },
            "href": "#/docs/postgres/43"
          }
        ]
      },
      {
        "id": "postgres-sec-22",
        "part": "SECTION 22: NEON + GITHUB WORKFLOW",
        "partKey": "",
        "title": {
          "en": "NEON + GITHUB WORKFLOW",
          "km": "NEON + GITHUB WORKFLOW"
        },
        "lessons": [
          {
            "id": 44,
            "number": 44,
            "slideId": "slide-44",
            "title": {
              "en": "Neon + GitHub Pull Request Workflow",
              "km": "ការរួមបញ្ចូលគ្នា Neon និង GitHub Pull Request"
            },
            "subtitle": {
              "en": "Ephemeral database branches for every single pull request",
              "km": "បង្កើត Database Branch ដាច់ដោយឡែកសម្រាប់គ្រប់ Pull Request ទាំងអស់"
            },
            "href": "#/docs/postgres/44"
          }
        ]
      },
      {
        "id": "postgres-sec-23",
        "part": "SECTION 23: NEON + NEXT.JS",
        "partKey": "",
        "title": {
          "en": "NEON + NEXT.JS",
          "km": "NEON + NEXT.JS"
        },
        "lessons": [
          {
            "id": 45,
            "number": 45,
            "slideId": "slide-45",
            "title": {
              "en": "Neon + Next.js App Router Architecture",
              "km": "ស្ថាបត្យកម្ម Next.js (App Router) ជាមួយ Neon"
            },
            "subtitle": {
              "en": "Modern server-side data fetching without API boilerplate",
              "km": "ការទាញយកទិន្នន័យពី Server ដោយមិនបាច់សរសេរ API Boilerplate"
            },
            "href": "#/docs/postgres/45"
          },
          {
            "id": 46,
            "number": 46,
            "slideId": "slide-46",
            "title": {
              "en": "Server vs Client Security Boundary",
              "km": "ព្រំដែនសុវត្ថិភាពរវាង Server និង Client"
            },
            "subtitle": {
              "en": "Protecting your DATABASE_URL from client-side bundle exposure",
              "km": "ការការពារ DATABASE_URL មិនឱ្យបែកធ្លាយទៅកាន់ Browser JavaScript"
            },
            "href": "#/docs/postgres/46"
          }
        ]
      },
      {
        "id": "postgres-sec-24",
        "part": "SECTION 24: DATABASE CLIENTS",
        "partKey": "",
        "title": {
          "en": "DATABASE CLIENTS",
          "km": "DATABASE CLIENTS"
        },
        "lessons": [
          {
            "id": 47,
            "number": 47,
            "slideId": "slide-47",
            "title": {
              "en": "Database Access Ecosystem",
              "km": "ប្រព័ន្ធឧបករណ៍ភ្ជាប់ Database (Clients)"
            },
            "subtitle": {
              "en": "Comparing Raw SQL, Query Builders, and Modern ORMs",
              "km": "ការប្រៀបធៀបរវាង Raw SQL, Query Builders និង ORMs ទំនើប"
            },
            "href": "#/docs/postgres/47"
          }
        ]
      },
      {
        "id": "postgres-sec-25",
        "part": "SECTION 25: DRIZZLE + NEON",
        "partKey": "",
        "title": {
          "en": "DRIZZLE + NEON",
          "km": "DRIZZLE + NEON"
        },
        "lessons": [
          {
            "id": 48,
            "number": 48,
            "slideId": "slide-48",
            "title": {
              "en": "Drizzle ORM Schema with Neon",
              "km": "ការកំណត់ Schema ជាមួយ Drizzle ORM"
            },
            "subtitle": {
              "en": "Defining type-safe tables in pure TypeScript",
              "km": "ការបង្កើតតារាងដែលមាន Type-safety ពេញលេញតាមរយៈ TypeScript"
            },
            "href": "#/docs/postgres/48"
          },
          {
            "id": 49,
            "number": 49,
            "slideId": "slide-49",
            "title": {
              "en": "Querying with Drizzle & @neondatabase/serverless",
              "km": "ការ Query ជាមួយ Drizzle និង @neondatabase/serverless"
            },
            "subtitle": {
              "en": "High-performance queries over HTTP and WebSockets",
              "km": "ការទាញយកទិន្នន័យល្បឿនលឿនតាមរយៈ HTTP និង WebSockets"
            },
            "href": "#/docs/postgres/49"
          }
        ]
      },
      {
        "id": "postgres-sec-26",
        "part": "SECTION 26: PRISMA + NEON",
        "partKey": "",
        "title": {
          "en": "PRISMA + NEON",
          "km": "PRISMA + NEON"
        },
        "lessons": [
          {
            "id": 50,
            "number": 50,
            "slideId": "slide-50",
            "title": {
              "en": "Prisma ORM Integration with Neon",
              "km": "ការប្រើប្រាស់ Prisma ORM ជាមួយ Neon"
            },
            "subtitle": {
              "en": "Schema modeling and automated client generation",
              "km": "ការរៀបចំ Schema និងការបង្កើត Prisma Client ស្វ័យប្រវត្តិ"
            },
            "href": "#/docs/postgres/50"
          },
          {
            "id": 51,
            "number": 51,
            "slideId": "slide-51",
            "title": {
              "en": "ORM Tradeoff Comparison Matrix",
              "km": "តារាងប្រៀបធៀបឧបករណ៍ ORM"
            },
            "subtitle": {
              "en": "Evaluating Raw SQL, Drizzle, and Prisma across real production metrics",
              "km": "ការវាយតម្លៃ Raw SQL, Drizzle និង Prisma លើលក្ខខណ្ឌជាក់ស្តែងក្នុង Production"
            },
            "href": "#/docs/postgres/51"
          }
        ]
      },
      {
        "id": "postgres-sec-27",
        "part": "SECTION 27: CONNECTION POOLING",
        "partKey": "",
        "title": {
          "en": "CONNECTION POOLING",
          "km": "CONNECTION POOLING"
        },
        "lessons": [
          {
            "id": 52,
            "number": 52,
            "slideId": "slide-52",
            "title": {
              "en": "The Serverless Connection Exhaustion Problem",
              "km": "បញ្ហា Connection អស់ក្នុង Serverless"
            },
            "subtitle": {
              "en": "Why 500 lambda invocations can crash a traditional database",
              "km": "ហេតុអ្វីការហៅ Lambda ៥០០ ដងអាចធ្វើឱ្យ Database បុរាណគាំងបាន?"
            },
            "href": "#/docs/postgres/52"
          },
          {
            "id": 53,
            "number": 53,
            "slideId": "slide-53",
            "title": {
              "en": "Neon Connection Pooling (PgBouncer)",
              "km": "Connection Pooling របស់ Neon (PgBouncer)"
            },
            "subtitle": {
              "en": "Scaling to 10,000+ serverless connections seamlessly",
              "km": "ការទ្រទ្រង់ Connection រហូតដល់ជាង ១០,០០០ ក្នុងពេលតែមួយដោយរលូន"
            },
            "href": "#/docs/postgres/53"
          }
        ]
      },
      {
        "id": "postgres-sec-28",
        "part": "SECTION 28: ENVIRONMENT VARIABLES",
        "partKey": "",
        "title": {
          "en": "ENVIRONMENT VARIABLES",
          "km": "ENVIRONMENT VARIABLES"
        },
        "lessons": [
          {
            "id": 54,
            "number": 54,
            "slideId": "slide-54",
            "title": {
              "en": "Secret Management & Environment Variables",
              "km": "ការគ្រប់គ្រង Secrets និង Environment Variables"
            },
            "subtitle": {
              "en": "Protecting database credentials across local dev and production hosting",
              "km": "ការការពារលេខសម្ងាត់ Database ទាំងក្នុងម៉ាស៊ីនផ្ទាល់ និងលើ Cloud Hosting"
            },
            "href": "#/docs/postgres/54"
          }
        ]
      },
      {
        "id": "postgres-sec-29",
        "part": "SECTION 29: DATABASE SECURITY",
        "partKey": "",
        "title": {
          "en": "DATABASE SECURITY",
          "km": "DATABASE SECURITY"
        },
        "lessons": [
          {
            "id": 55,
            "number": 55,
            "slideId": "slide-55",
            "title": {
              "en": "Preventing SQL Injection Attacks",
              "km": "ការការពារការវាយប្រហារ SQL Injection"
            },
            "subtitle": {
              "en": "The critical difference between dangerous string concatenation and parameterized queries",
              "km": "ភាពខុសគ្នារវាងការតអក្សរ String ដ៏គ្រោះថ្នាក់ និងការប្រើ Parameterized Queries"
            },
            "href": "#/docs/postgres/55"
          },
          {
            "id": 56,
            "number": 56,
            "slideId": "slide-56",
            "title": {
              "en": "Passwords, TLS/SSL & Access Control",
              "km": "ការការពារ Password, TLS/SSL និងសិទ្ធិ"
            },
            "subtitle": {
              "en": "Comprehensive security guidelines for production database deployments",
              "km": "គោលការណ៍សុវត្ថិភាពដ៏រឹងមាំសម្រាប់ Production Database"
            },
            "href": "#/docs/postgres/56"
          }
        ]
      },
      {
        "id": "postgres-sec-30",
        "part": "SECTION 30: PERFORMANCE OPTIMIZATION",
        "partKey": "",
        "title": {
          "en": "PERFORMANCE OPTIMIZATION",
          "km": "PERFORMANCE OPTIMIZATION"
        },
        "lessons": [
          {
            "id": 57,
            "number": 57,
            "slideId": "slide-57",
            "title": {
              "en": "Database Performance Optimization Checklist",
              "km": "បញ្ជីត្រួតពិនិត្យល្បឿន Database (Performance Checklist)"
            },
            "subtitle": {
              "en": "Proven engineering practices for high-throughput, low-latency applications",
              "km": "វិធីសាស្ត្រវិស្វកម្មជាក់ស្តែងសម្រាប់ប្រព័ន្ធដែលមានល្បឿនលឿន និងឆ្លើយតបរហ័ស"
            },
            "href": "#/docs/postgres/57"
          },
          {
            "id": 58,
            "number": 58,
            "slideId": "slide-58",
            "title": {
              "en": "Debugging Slow Queries with EXPLAIN ANALYZE",
              "km": "ការស្វែងរក Query យឺតជាមួយ EXPLAIN ANALYZE"
            },
            "subtitle": {
              "en": "Step-by-step diagnostic workflow for slow database calls",
              "km": "ជំហានជាក់ស្តែងក្នុងការដោះស្រាយបញ្ហាល្បឿនយឺតក្នុង Database"
            },
            "href": "#/docs/postgres/58"
          }
        ]
      },
      {
        "id": "postgres-sec-31",
        "part": "SECTION 31: SEARCH &amp; PAGINATION",
        "partKey": "",
        "title": {
          "en": "SEARCH & PAGINATION",
          "km": "SEARCH & PAGINATION"
        },
        "lessons": [
          {
            "id": 59,
            "number": 59,
            "slideId": "slide-59",
            "title": {
              "en": "Pagination: The LIMIT / OFFSET Problem",
              "km": "Pagination៖ បញ្ហានៃការប្រើ LIMIT / OFFSET"
            },
            "subtitle": {
              "en": "Why OFFSET 100000 degrades severely on large production tables",
              "km": "ហេតុអ្វី OFFSET 100000 ធ្វើឱ្យប៉ះពាល់ដល់ល្បឿនយ៉ាងធ្ងន់ធ្ងរ?"
            },
            "href": "#/docs/postgres/59"
          },
          {
            "id": 60,
            "number": 60,
            "slideId": "slide-60",
            "title": {
              "en": "Keyset (Cursor-Based) Pagination",
              "km": "Keyset (Cursor-Based) Pagination"
            },
            "subtitle": {
              "en": "Consistent O(1) performance regardless of dataset depth",
              "km": "រក្សាល្បឿន O(1) យ៉ាងលឿនទោះបីទិន្នន័យមានរាប់លានជួរក៏ដោយ"
            },
            "href": "#/docs/postgres/60"
          }
        ]
      },
      {
        "id": "postgres-sec-32",
        "part": "SECTION 32: REAL PROJECT: TASKFLOW",
        "partKey": "",
        "title": {
          "en": "REAL PROJECT: TASKFLOW",
          "km": "REAL PROJECT: TASKFLOW"
        },
        "lessons": [
          {
            "id": 61,
            "number": 61,
            "slideId": "slide-61",
            "title": {
              "en": "Real Project: TaskFlow Architecture",
              "km": "គម្រោងជាក់ស្តែង៖ ស្ថាបត្យកម្ម TaskFlow"
            },
            "subtitle": {
              "en": "Designing a production task management application database",
              "km": "ការរចនា Database សម្រាប់កម្មវិធីគ្រប់គ្រងកិច្ចការ Task Management"
            },
            "href": "#/docs/postgres/61"
          }
        ]
      },
      {
        "id": "postgres-sec-33",
        "part": "SECTION 33: BUILD TASKFLOW STEP-BY-STEP",
        "partKey": "",
        "title": {
          "en": "BUILD TASKFLOW STEP-BY-STEP",
          "km": "BUILD TASKFLOW STEP-BY-STEP"
        },
        "lessons": [
          {
            "id": 62,
            "number": 62,
            "slideId": "slide-62",
            "title": {
              "en": "TaskFlow DDL: Tables & Custom Types",
              "km": "TaskFlow DDL៖ តារាង និងប្រភេទ ENUM ផ្ទាល់ខ្លួន"
            },
            "subtitle": {
              "en": "Creating users, projects, and custom ENUM types",
              "km": "ការបង្កើតតារាង Users, Projects និងប្រភេទស្ថានភាព Task Status"
            },
            "href": "#/docs/postgres/62"
          },
          {
            "id": 63,
            "number": 63,
            "slideId": "slide-63",
            "title": {
              "en": "TaskFlow DDL: Tasks & Comments Schema",
              "km": "TaskFlow DDL៖ Schema សម្រាប់ Tasks និង Comments"
            },
            "subtitle": {
              "en": "Implementing cascading foreign keys and performance indexes",
              "km": "ការអនុវត្ត Foreign Keys បែប Cascade និងការបង្កើត Indexes"
            },
            "href": "#/docs/postgres/63"
          }
        ]
      },
      {
        "id": "postgres-sec-34",
        "part": "SECTION 34: TASKFLOW CRUD OPERATIONS",
        "partKey": "",
        "title": {
          "en": "TASKFLOW CRUD OPERATIONS",
          "km": "TASKFLOW CRUD OPERATIONS"
        },
        "lessons": [
          {
            "id": 64,
            "number": 64,
            "slideId": "slide-64",
            "title": {
              "en": "TaskFlow CRUD: Create & Read Operations",
              "km": "TaskFlow CRUD៖ ប្រតិបត្តិការ Create និង Read"
            },
            "subtitle": {
              "en": "Inserting tasks and querying project dashboards with joined data",
              "km": "ការបញ្ចូល Task ថ្មី និងការទាញយកទិន្នន័យ Dashboard តាមរយៈ Joins"
            },
            "href": "#/docs/postgres/64"
          },
          {
            "id": 65,
            "number": 65,
            "slideId": "slide-65",
            "title": {
              "en": "TaskFlow CRUD: Update & Delete Operations",
              "km": "TaskFlow CRUD៖ ប្រតិបត្តិការ Update និង Delete"
            },
            "subtitle": {
              "en": "Updating task statuses and managing cascading comment deletions",
              "km": "ការកែប្រែស្ថានភាព Task និងការលុបបែប Cascade លើ Comments"
            },
            "href": "#/docs/postgres/65"
          }
        ]
      },
      {
        "id": "postgres-sec-35",
        "part": "SECTION 35: PRODUCTION ARCHITECTURE",
        "partKey": "",
        "title": {
          "en": "PRODUCTION ARCHITECTURE",
          "km": "PRODUCTION ARCHITECTURE"
        },
        "lessons": [
          {
            "id": 66,
            "number": 66,
            "slideId": "slide-66",
            "title": {
              "en": "Complete Production Fullstack Architecture",
              "km": "ស្ថាបត្យកម្ម Fullstack ក្នុង Production ទាំងមូល"
            },
            "subtitle": {
              "en": "How Next.js, Vercel, and Neon PostgreSQL connect in production",
              "km": "របៀបដែល Next.js, Vercel និង Neon PostgreSQL តភ្ជាប់គ្នាដោយរលូន"
            },
            "href": "#/docs/postgres/66"
          }
        ]
      },
      {
        "id": "postgres-sec-36",
        "part": "SECTION 36: LOCAL VS NEON COMPARISON",
        "partKey": "",
        "title": {
          "en": "LOCAL VS NEON COMPARISON",
          "km": "LOCAL VS NEON COMPARISON"
        },
        "lessons": [
          {
            "id": 67,
            "number": 67,
            "slideId": "slide-67",
            "title": {
              "en": "Local PostgreSQL vs Neon Comparison",
              "km": "ការប្រៀបធៀប Local PostgreSQL ទល់នឹង Neon"
            },
            "subtitle": {
              "en": "A balanced comparison matrix across real development and production scenarios",
              "km": "តារាងវិភាគជាក់ស្តែងរវាងការប្រើប្រាស់ក្នុងម៉ាស៊ីនផ្ទាល់ និងលើ Cloud Serverless"
            },
            "href": "#/docs/postgres/67"
          }
        ]
      },
      {
        "id": "postgres-sec-37",
        "part": "SECTION 37: 12 COMMON DATABASE MISTAKES",
        "partKey": "",
        "title": {
          "en": "12 COMMON DATABASE MISTAKES",
          "km": "12 COMMON DATABASE MISTAKES"
        },
        "lessons": [
          {
            "id": 68,
            "number": 68,
            "slideId": "slide-68",
            "title": {
              "en": "Top 12 Beginner & Production Mistakes",
              "km": "កំហុសទូទៅទាំង ១២ ដែលត្រូវជៀសវាងដាច់ខាត"
            },
            "subtitle": {
              "en": "Critical anti-patterns to avoid in professional database management",
              "km": "ទម្លាប់មិនល្អ (Anti-patterns) ដែលអាចបំផ្លាញប្រព័ន្ធ Database ក្នុង Production"
            },
            "href": "#/docs/postgres/68"
          }
        ]
      },
      {
        "id": "postgres-sec-38",
        "part": "SECTION 38: DEBUGGING DATABASE PROBLEMS",
        "partKey": "",
        "title": {
          "en": "DEBUGGING DATABASE PROBLEMS",
          "km": "DEBUGGING DATABASE PROBLEMS"
        },
        "lessons": [
          {
            "id": 69,
            "number": 69,
            "slideId": "slide-69",
            "title": {
              "en": "Database Troubleshooting Runbook",
              "km": "ជំហានដោះស្រាយបញ្ហា Database (Runbook)"
            },
            "subtitle": {
              "en": "A systematic diagnostic workflow for resolving connection and query errors",
              "km": "លំហូរការងារបែបវិទ្យាសាស្ត្រដើម្បីដោះស្រាយបញ្ហា Connection និង Query Errors"
            },
            "href": "#/docs/postgres/69"
          }
        ]
      },
      {
        "id": "postgres-sec-39",
        "part": "SECTION 39: CHEAT SHEET",
        "partKey": "",
        "title": {
          "en": "CHEAT SHEET",
          "km": "CHEAT SHEET"
        },
        "lessons": [
          {
            "id": 70,
            "number": 70,
            "slideId": "slide-70",
            "title": {
              "en": "PostgreSQL Cheat Sheet: CLI & Schema DDL",
              "km": "PostgreSQL Cheat Sheet៖ CLI & Schema DDL"
            },
            "subtitle": {
              "en": "Quick reference for essential psql commands and table definition syntax",
              "km": "តារាងសង្ខេបពាក្យបញ្ជា psql សំខាន់ៗ និង Syntax បង្កើតតារាង DDL"
            },
            "href": "#/docs/postgres/70"
          },
          {
            "id": 71,
            "number": 71,
            "slideId": "slide-71",
            "title": {
              "en": "PostgreSQL & Neon Cheat Sheet: DML & Cloud",
              "km": "PostgreSQL & Neon Cheat Sheet៖ DML & Cloud"
            },
            "subtitle": {
              "en": "Quick reference for SQL queries, joins, transactions, and Neon concepts",
              "km": "តារាងសង្ខេប SQL Queries, Joins, Transactions និងគំនិតសំខាន់ៗរបស់ Neon"
            },
            "href": "#/docs/postgres/71"
          }
        ]
      },
      {
        "id": "postgres-sec-40",
        "part": "SECTION 40: COURSE SUMMARY &amp; MASTERY",
        "partKey": "",
        "title": {
          "en": "COURSE SUMMARY & MASTERY",
          "km": "COURSE SUMMARY & MASTERY"
        },
        "lessons": [
          {
            "id": 72,
            "number": 72,
            "slideId": "slide-72",
            "title": {
              "en": "PostgreSQL & Neon Mastery Complete!",
              "km": "អបអរសាទរ៖ អ្នកបានបញ្ចប់មេរៀន PostgreSQL & Neon!"
            },
            "subtitle": {
              "en": "You now have the full architectural toolkit to build production-grade web applications",
              "km": "ឥឡូវនេះអ្នកមានចំណេះដឹងគ្រប់គ្រាន់ក្នុងការបង្កើត និងគ្រប់គ្រង Production Web Database"
            },
            "href": "#/docs/postgres/72"
          }
        ]
      }
    ]
  },
  {
    "id": "vercel",
    "lessonKey": "l7",
    "module": "MODULE 07",
    "accent": "zinc",
    "icon": "Triangle",
    "category": "devops",
    "title": {
      "en": "Vercel & Web Deployment",
      "km": "Vercel & Web Deployment"
    },
    "desc": {
      "en": "Master real-world Next.js web deployment from GitHub to Vercel. Configure Neon PostgreSQL, custom domains, DNS records, HTTPS, and production rollbacks.",
      "km": "ស្វែងយល់ពីការ Deploy គម្រោង Next.js ជាក់ស្ដែងពី GitHub ទៅកាន់ Vercel។ រៀបចំ Neon PostgreSQL, Custom Domain, DNS Records, HTTPS, និងការ Rollback លើ Production។"
    },
    "totalLessons": 72,
    "sections": [
      {
        "id": "vercel-sec-1",
        "part": "INTRODUCTION",
        "partKey": "part_1",
        "title": {
          "en": "PART 1: INSTALLATION",
          "km": "ផ្នែកទី ១៖ ការដំឡើង"
        },
        "lessons": [
          {
            "id": 1,
            "number": 1,
            "slideId": "slide-1",
            "title": {
              "en": "Vercel & Web Deployment From Zero to Production Masterclass",
              "km": "Vercel & ការ Deploy គេហទំព័រ ពីកម្រិតដំបូងរហូតដល់ Production Masterclass"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/vercel/1"
          },
          {
            "id": 2,
            "number": 2,
            "slideId": "slide-2",
            "title": {
              "en": "What is Deployment?",
              "km": "តើការ Deploy មានន័យដូចម្តេច?"
            },
            "subtitle": {
              "en": "Transitioning code from your local computer to the global internet",
              "km": "ការផ្ទេរកូដពីម៉ាស៊ីនកុំព្យូទ័រផ្ទាល់ខ្លួនរបស់អ្នក ទៅកាន់ប្រព័ន្ធអ៊ីនធឺណិតទូទាំងពិភពលោក"
            },
            "href": "#/docs/vercel/2"
          },
          {
            "id": 3,
            "number": 3,
            "slideId": "slide-3",
            "title": {
              "en": "The Production Deployment Pipeline",
              "km": "វដ្តដំណើរការនៃការបញ្ចេញកូដ (Pipeline)"
            },
            "subtitle": {
              "en": "Architectural path from developer code to global visitors",
              "km": "ស្ថាបត្យកម្មតាំងពីកូដក្នុងកុំព្យូទ័ររហូតដល់អ្នកទស្សនាទូទាំងសកលលោក"
            },
            "href": "#/docs/vercel/3"
          },
          {
            "id": 4,
            "number": 4,
            "slideId": "slide-4",
            "title": {
              "en": "Static Websites vs Fullstack Applications",
              "km": "គេហទំព័រ Static និង Fullstack Web Applications"
            },
            "subtitle": {
              "en": "Understanding execution models: Static Files, SSR, and Serverless APIs",
              "km": "ស្វែងយល់ពីរបៀបដំណើរការ៖ Static Files, Server-Side Rendering (SSR), និង Serverless APIs"
            },
            "href": "#/docs/vercel/4"
          }
        ]
      },
      {
        "id": "vercel-sec-2",
        "part": "WHAT IS VERCEL?",
        "partKey": "part_2",
        "title": {
          "en": "PART 2: CREATE A PROJECT",
          "km": "ផ្នែកទី ២៖ បង្កើតគម្រោង"
        },
        "lessons": [
          {
            "id": 5,
            "number": 5,
            "slideId": "slide-5",
            "title": {
              "en": "What is Vercel?",
              "km": "តើអ្វីជា Vercel?"
            },
            "subtitle": {
              "en": "The native cloud platform for Next.js and the modern web",
              "km": "Cloud Platform ឈានមុខគេដែលបង្កើតឡើងយ៉ាងពិសេសសម្រាប់ Next.js និងគេហទំព័រទំនើប"
            },
            "href": "#/docs/vercel/5"
          },
          {
            "id": 6,
            "number": 6,
            "slideId": "slide-6",
            "title": {
              "en": "Core Platform Capabilities",
              "km": "លក្ខណៈពិសេសស្នូលរបស់ Vercel"
            },
            "subtitle": {
              "en": "Git automation, Global Edge Network, Serverless functions, and instant previews",
              "km": "ការតភ្ជាប់ Git ដោយស្វ័យប្រវត្តិ, បណ្តាញ Global Edge Network, Serverless Functions, និងការ Preview ភ្លាមៗ"
            },
            "href": "#/docs/vercel/6"
          },
          {
            "id": 7,
            "number": 7,
            "slideId": "slide-7",
            "title": {
              "en": "What Happens During a Vercel Build?",
              "km": "តើមានអ្វីកើតឡើងនៅពេល Vercel កំពុង Build?"
            },
            "subtitle": {
              "en": "Behind the scenes of containerized build runners and artifact generation",
              "km": "ដំណើរការនៅពីក្រោយខ្នងនៃប្រព័ន្ធ Build Runner ឯករាជ្យ និងការបង្កើត File សម្រេច"
            },
            "href": "#/docs/vercel/7"
          },
          {
            "id": 8,
            "number": 8,
            "slideId": "slide-8",
            "title": {
              "en": "Supported Frameworks on Vercel",
              "km": "Frameworks ផ្សេងៗដែល Vercel គាំទ្រ"
            },
            "subtitle": {
              "en": "First-class support for Next.js, Astro, Remix, SvelteKit, Vite, and static HTML",
              "km": "គាំទ្រយ៉ាងពេញលេញសម្រាប់ Next.js, Astro, Remix, SvelteKit, Vite, និង Static HTML"
            },
            "href": "#/docs/vercel/8"
          }
        ]
      },
      {
        "id": "vercel-sec-3",
        "part": "CREATE ACCOUNT",
        "partKey": "part_3",
        "title": {
          "en": "PART 3: CHECK PROJECT STATUS",
          "km": "ផ្នែកទី ៣៖ ពិនិត្យស្ថានភាពគម្រោង"
        },
        "lessons": [
          {
            "id": 9,
            "number": 9,
            "slideId": "slide-9",
            "title": {
              "en": "Creating Your Vercel Account",
              "km": "ការបង្កើតគណនី Vercel"
            },
            "subtitle": {
              "en": "Step-by-step signup via GitHub integration on vercel.com",
              "km": "ការចុះឈ្មោះមួយជំហានម្តងៗតាមរយៈគណនី GitHub នៅលើ vercel.com"
            },
            "href": "#/docs/vercel/9"
          },
          {
            "id": 10,
            "number": 10,
            "slideId": "slide-10",
            "title": {
              "en": "Personal Account vs Team Workspace",
              "km": "គណនីផ្ទាល់ខ្លួន (Personal) និង Team Workspace"
            },
            "subtitle": {
              "en": "Understanding account scopes, team collaboration, and permissions",
              "km": "ស្វែងយល់ពីទំហំគណនី, ការសហការជាក្រុម, និងសិទ្ធិអនុញ្ញាត (Permissions)"
            },
            "href": "#/docs/vercel/10"
          },
          {
            "id": 11,
            "number": 11,
            "slideId": "slide-11",
            "title": {
              "en": "Navigating the Vercel Dashboard",
              "km": "ការស្វែងយល់ពីផ្ទាំងបញ្ជា (Vercel Dashboard)"
            },
            "subtitle": {
              "en": "Overview of Projects, Deployments, Domains, Integrations, and Analytics",
              "km": "ស្គាល់ទំព័រ Projects, Deployments, Domains, Integrations, និងស្ថិតិ Analytics"
            },
            "href": "#/docs/vercel/11"
          }
        ]
      },
      {
        "id": "vercel-sec-4",
        "part": "PREPARE PROJECT",
        "partKey": "part_4",
        "title": {
          "en": "PART 4: STAGING",
          "km": "ផ្នែកទី ៤៖ STAGING AREA"
        },
        "lessons": [
          {
            "id": 12,
            "number": 12,
            "slideId": "slide-12",
            "title": {
              "en": "Preparing a Next.js Project for Deployment",
              "km": "ការរៀបចំគម្រោង Next.js មុនពេល Deploy"
            },
            "subtitle": {
              "en": "Verifying package.json scripts, dependencies, and local build integrity",
              "km": "ផ្ទៀងផ្ទាត់ពាក្យបញ្ជាក្នុង package.json, dependencies, និងការ build សាកល្បង"
            },
            "href": "#/docs/vercel/12"
          },
          {
            "id": 13,
            "number": 13,
            "slideId": "slide-13",
            "title": {
              "en": "Local Build Verification",
              "km": "ការ Build សាកល្បងលើម៉ាស៊ីនផ្ទាល់ខ្លួន"
            },
            "subtitle": {
              "en": "Catching compilation and type errors before pushing to GitHub",
              "km": "ស្វែងរក និងជួសជុលបញ្ហា Compilation និង TypeScript មុនពេល push ទៅ GitHub"
            },
            "href": "#/docs/vercel/13"
          },
          {
            "id": 14,
            "number": 14,
            "slideId": "slide-14",
            "title": {
              "en": "Environment Variables Audit",
              "km": "ការត្រួតពិនិត្យ Environment Variables"
            },
            "subtitle": {
              "en": "Keeping secrets in .env.local and out of version control",
              "km": "រក្សាលេខកូដសម្ងាត់ក្នុង .env.local និងហាមដាច់ខាតមិនឱ្យ push ចូល Git"
            },
            "href": "#/docs/vercel/14"
          },
          {
            "id": 15,
            "number": 15,
            "slideId": "slide-15",
            "title": {
              "en": "Git Repository Health Check",
              "km": "ការពិនិត្យស្ថានភាព Git Repository"
            },
            "subtitle": {
              "en": "Clean working tree, .gitignore rules, and production branch alignment",
              "km": "ធានាថាកូដបាន commit ស្អាត, មានឯកសារ .gitignore, និងនៅលើ branch ត្រឹមត្រូវ"
            },
            "href": "#/docs/vercel/15"
          }
        ]
      },
      {
        "id": "vercel-sec-5",
        "part": "CREATE GITHUB REPO",
        "partKey": "part_5",
        "title": {
          "en": "PART 5: COMMIT",
          "km": "ផ្នែកទី ៥៖ ការ COMMIT"
        },
        "lessons": [
          {
            "id": 16,
            "number": 16,
            "slideId": "slide-16",
            "title": {
              "en": "Creating a GitHub Repository",
              "km": "ការបង្កើត Repository លើ GitHub"
            },
            "subtitle": {
              "en": "Setting up a public or private repository for project hosting",
              "km": "រៀបចំបង្កើត Public ឬ Private repository សម្រាប់ផ្ទុកកូដគម្រោង"
            },
            "href": "#/docs/vercel/16"
          },
          {
            "id": 17,
            "number": 17,
            "slideId": "slide-17",
            "title": {
              "en": "Pushing Code to GitHub",
              "km": "ការ Push កូដឡើងទៅ GitHub"
            },
            "subtitle": {
              "en": "Connecting local repository to remote origin with git push",
              "km": "ភ្ជាប់គម្រោងក្នុងកុំព្យូទ័រទៅកាន់ GitHub តាមរយៈពាក្យបញ្ជា git push"
            },
            "href": "#/docs/vercel/17"
          },
          {
            "id": 18,
            "number": 18,
            "slideId": "slide-18",
            "title": {
              "en": "Verifying Repository on GitHub",
              "km": "ការផ្ទៀងផ្ទាត់នៅលើ GitHub"
            },
            "subtitle": {
              "en": "Checking branches, commits, and ensuring no secrets leaked",
              "km": "ពិនិត្យមើល branch, ប្រវត្តិនៃ commits, និងធានាថាមិនមានលេខសម្ងាត់ធ្លាយឡើយ"
            },
            "href": "#/docs/vercel/18"
          }
        ]
      },
      {
        "id": "vercel-sec-6",
        "part": "IMPORT PROJECT",
        "partKey": "part_6",
        "title": {
          "en": "PART 6: CREATE GITHUB REPOSITORY",
          "km": "ផ្នែកទី ៦៖ បង្កើត GITHUB REPOSITORY"
        },
        "lessons": [
          {
            "id": 19,
            "number": 19,
            "slideId": "slide-19",
            "title": {
              "en": "Importing a Project into Vercel",
              "km": "ការភ្ជាប់ និង Import គម្រោងចូល Vercel"
            },
            "subtitle": {
              "en": "Connecting your GitHub account and selecting the repository",
              "km": "ភ្ជាប់គណនី GitHub របស់អ្នក និងជ្រើសរើស repository ដែលចង់ deploy"
            },
            "href": "#/docs/vercel/19"
          },
          {
            "id": 20,
            "number": 20,
            "slideId": "slide-20",
            "title": {
              "en": "Framework Detection & Root Directory",
              "km": "ការសម្គាល់ Framework និង Root Directory"
            },
            "subtitle": {
              "en": "Automatic Next.js detection and monorepo path configuration",
              "km": "Vercel រកឃើញ Next.js ដោយស្វ័យប្រវត្តិ និងការកំណត់ផ្លូវបើជា Monorepo"
            },
            "href": "#/docs/vercel/20"
          },
          {
            "id": 21,
            "number": 21,
            "slideId": "slide-21",
            "title": {
              "en": "Build and Output Settings",
              "km": "ការកំណត់ Build Command និង Output Directory"
            },
            "subtitle": {
              "en": "Understanding default presets and custom build commands",
              "km": "ស្វែងយល់ពីតម្លៃ Default Preset និងការកំណត់ពាក្យបញ្ជា build ផ្ទាល់ខ្លួន"
            },
            "href": "#/docs/vercel/21"
          },
          {
            "id": 22,
            "number": 22,
            "slideId": "slide-22",
            "title": {
              "en": "Configuring Initial Environment Variables",
              "km": "ការបញ្ចូល Environment Variables ដំបូង"
            },
            "subtitle": {
              "en": "Supplying production keys before triggering the first build",
              "km": "ផ្តល់តម្លៃ key សម្ងាត់សម្រាប់ production មុនពេលដំណើរការ build ដំបូង"
            },
            "href": "#/docs/vercel/22"
          }
        ]
      },
      {
        "id": "vercel-sec-7",
        "part": "FIRST DEPLOYMENT",
        "partKey": "part_7",
        "title": {
          "en": "PART 7: CONNECT LOCAL TO GITHUB",
          "km": "ផ្នែកទី ៧៖ ភ្ជាប់ LOCAL ទៅ GITHUB"
        },
        "lessons": [
          {
            "id": 23,
            "number": 23,
            "slideId": "slide-23",
            "title": {
              "en": "The First Deployment Lifecycle",
              "km": "វដ្តជីវិតនៃការ Deploy លើកដំបូង"
            },
            "subtitle": {
              "en": "From git push to active URL in under 60 seconds",
              "km": "ពីការចុច Deploy រហូតទទួលបាន URL ដំណើរការក្នុងរយៈពេលក្រោម ៦០ វិនាទី"
            },
            "href": "#/docs/vercel/23"
          },
          {
            "id": 24,
            "number": 24,
            "slideId": "slide-24",
            "title": {
              "en": "Inspecting Live Build Logs",
              "km": "ការអាន និងពិនិត្យ Live Build Logs"
            },
            "subtitle": {
              "en": "Real-time streaming output, dependency caching, and build steps",
              "km": "ទស្សនាការបង្ហាញលទ្ធផលជាក់ស្តែង, ការប្រើ cache នៃ dependency, និងដំណាក់កាលនីមួយៗ"
            },
            "href": "#/docs/vercel/24"
          },
          {
            "id": 25,
            "number": 25,
            "slideId": "slide-25",
            "title": {
              "en": "Deployment URLs & Production Aliases",
              "km": "ស្វែងយល់ពី Deployment URLs និង Domains"
            },
            "subtitle": {
              "en": "Understanding vercel.app domains and canonical aliases",
              "km": "ស្វែងយល់ពីអាសយដ្ឋាន vercel.app និង canonical production alias"
            },
            "href": "#/docs/vercel/25"
          },
          {
            "id": 26,
            "number": 26,
            "slideId": "slide-26",
            "title": {
              "en": "Post-Deployment Verification",
              "km": "ការផ្ទៀងផ្ទាត់គុណភាពក្រោយពេល Deploy"
            },
            "subtitle": {
              "en": "Testing client hydration, API routes, and network requests",
              "km": "ការធ្វើតេស្ត Client Hydration, API Routes, និងល្បឿនផ្ទុកទិន្នន័យលើបណ្តាញ"
            },
            "href": "#/docs/vercel/26"
          }
        ]
      },
      {
        "id": "vercel-sec-8",
        "part": "PREVIEW VS PRODUCTION",
        "partKey": "part_8",
        "title": {
          "en": "PART 8: FIRST PUSH",
          "km": "ផ្នែកទី ៨៖ ការ PUSH លើកដំបូង"
        },
        "lessons": [
          {
            "id": 27,
            "number": 27,
            "slideId": "slide-27",
            "title": {
              "en": "Preview Deployments vs Production",
              "km": "ភាពខុសគ្នារវាង Preview និង Production"
            },
            "subtitle": {
              "en": "Isolated staging environments for every branch and pull request",
              "km": "ប្រព័ន្ធតេស្តកូដឯករាជ្យសម្រាប់គ្រប់ branch និង Pull Request ទាំងអស់"
            },
            "href": "#/docs/vercel/27"
          },
          {
            "id": 28,
            "number": 28,
            "slideId": "slide-28",
            "title": {
              "en": "Git Branching Workflow for Vercel",
              "km": "យុទ្ធសាស្ត្រ Git Branch សម្រាប់ Vercel"
            },
            "subtitle": {
              "en": "Main branch for production, feature branches for preview testing",
              "km": "ប្រើប្រាស់ main branch សម្រាប់ Production និង feature branch សម្រាប់ Preview"
            },
            "href": "#/docs/vercel/28"
          },
          {
            "id": 29,
            "number": 29,
            "slideId": "slide-29",
            "title": {
              "en": "Pull Request Previews & Team Feedback",
              "km": "Pull Request Previews និងការផ្តល់យោបល់ជាក្រុម"
            },
            "subtitle": {
              "en": "Automated Vercel bot comments, preview URLs, and visual inspection",
              "km": "ការ comment ស្វ័យប្រវត្តិនៃ Vercel Bot, តំណភ្ជាប់ URL តេស្ត, និងការត្រួតពិនិត្យ UI"
            },
            "href": "#/docs/vercel/29"
          },
          {
            "id": 30,
            "number": 30,
            "slideId": "slide-30",
            "title": {
              "en": "Promoting Previews to Production",
              "km": "ការលើកកម្ពស់ Preview ទៅជា Production"
            },
            "subtitle": {
              "en": "Instant traffic switch with zero rebuilds and zero downtime",
              "km": "ការផ្លាស់ប្តូរចរាចរណ៍អ្នកទស្សនាភ្លាមៗដោយមិនបាច់ build ឡើងវិញ និងគ្មានការរអាក់រអួល"
            },
            "href": "#/docs/vercel/30"
          }
        ]
      },
      {
        "id": "vercel-sec-9",
        "part": "AUTOMATIC DEPLOYS",
        "partKey": "part_9",
        "title": {
          "en": "PART 9: FUTURE CHANGES",
          "km": "ផ្នែកទី ៩៖ ការផ្លាស់ប្តូរទៅមុខទៀត"
        },
        "lessons": [
          {
            "id": 31,
            "number": 31,
            "slideId": "slide-31",
            "title": {
              "en": "Automatic Deployments via Git Push",
              "km": "ការ Deploy ដោយស្វ័យប្រវត្តិតាមរយៈ Git Push"
            },
            "subtitle": {
              "en": "How webhooks trigger instant builds whenever code is pushed",
              "km": "របៀបដែល Webhooks ចាប់ផ្តើម build ភ្លាមៗរាល់ពេលអ្នករុញកូដទៅ GitHub"
            },
            "href": "#/docs/vercel/31"
          },
          {
            "id": 32,
            "number": 32,
            "slideId": "slide-32",
            "title": {
              "en": "GitHub Commit Status Checks",
              "km": "ការពិនិត្យស្ថានភាពលើ GitHub Commit Status"
            },
            "subtitle": {
              "en": "Vercel deployment checks integrated into GitHub Pull Requests",
              "km": "ការផ្ទៀងផ្ទាត់ស្ថានភាពនៃ Vercel Deployment ផ្ទាល់នៅក្នុង GitHub Pull Request"
            },
            "href": "#/docs/vercel/32"
          },
          {
            "id": 33,
            "number": 33,
            "slideId": "slide-33",
            "title": {
              "en": "Deploy Hooks for External Triggers",
              "km": "ការប្រើប្រាស់ Deploy Hooks ពីប្រភពខាងក្រៅ"
            },
            "subtitle": {
              "en": "Triggering builds from CMS publishing events and webhooks",
              "km": "ការកេះឱ្យ Vercel build ឡើងវិញនៅពេលមានការផ្សាយមាតិកាថ្មីពី Headless CMS"
            },
            "href": "#/docs/vercel/33"
          }
        ]
      },
      {
        "id": "vercel-sec-10",
        "part": "ENV VARIABLES",
        "partKey": "part_10",
        "title": {
          "en": "PART 10: CLONE AN EXISTING PROJECT",
          "km": "ផ្នែកទី ១០៖ CLONE គម្រោងដែលមានស្រាប់"
        },
        "lessons": [
          {
            "id": 34,
            "number": 34,
            "slideId": "slide-34",
            "title": {
              "en": "Environment Variables Mental Model",
              "km": "គំរូយល់ដឹងអំពី Environment Variables"
            },
            "subtitle": {
              "en": "Separating configuration from code across development stages",
              "km": "ការបែងចែកការកំណត់ចេញពីកូដកម្មវិធីតាមដំណាក់កាលនីមួយៗ"
            },
            "href": "#/docs/vercel/34"
          },
          {
            "id": 35,
            "number": 35,
            "slideId": "slide-35",
            "title": {
              "en": "Environment Scope: Dev, Preview, Production",
              "km": "វិសាលភាព (Scope): Dev, Preview, Production"
            },
            "subtitle": {
              "en": "Targeting distinct databases and API keys per deployment stage",
              "km": "ការបំបែក database និង API key ដាច់ដោយឡែកពីគ្នាតាមបរិស្ថាននីមួយៗ"
            },
            "href": "#/docs/vercel/35"
          },
          {
            "id": 36,
            "number": 36,
            "slideId": "slide-36",
            "title": {
              "en": "The NEXT_PUBLIC_* Security Boundary",
              "km": "ព្រំដែនសុវត្ថិភាពនៃ NEXT_PUBLIC_*"
            },
            "subtitle": {
              "en": "Preventing client bundle leakage of private server secrets",
              "km": "ការទប់ស្កាត់កុំឱ្យកូដសម្ងាត់របស់ Server ធ្លាយចូលទៅកាន់ browser របស់អ្នកប្រើប្រាស់"
            },
            "href": "#/docs/vercel/36"
          },
          {
            "id": 37,
            "number": 37,
            "slideId": "slide-37",
            "title": {
              "en": "Managing Variables in Vercel Dashboard",
              "km": "ការគ្រប់គ្រង Variables លើ Vercel Dashboard"
            },
            "subtitle": {
              "en": "Adding, editing, masking, and bulk uploading environment variables",
              "km": "ការបន្ថែម, កែប្រែ, លាក់កូដសម្ងាត់, និងការ upload ឯកសារ .env ជាដុំ"
            },
            "href": "#/docs/vercel/37"
          },
          {
            "id": 38,
            "number": 38,
            "slideId": "slide-38",
            "title": {
              "en": "The Redeployment Requirement",
              "km": "តម្រូវការចាំបាច់ក្នុងការ Redeploy ឡើងវិញ"
            },
            "subtitle": {
              "en": "Why updated environment variables require a new deployment",
              "km": "មូលហេតុដែលការកែប្រែ Environment Variables តម្រូវឱ្យមានការ build ថ្មីជានិច្ច"
            },
            "href": "#/docs/vercel/38"
          }
        ]
      },
      {
        "id": "vercel-sec-11",
        "part": "NEXT.JS ON VERCEL",
        "partKey": "part_11",
        "title": {
          "en": "PART 11: BRANCHES",
          "km": "ផ្នែកទី ១១៖ BRANCHES (មែកធាងកូដ)"
        },
        "lessons": [
          {
            "id": 39,
            "number": 39,
            "slideId": "slide-39",
            "title": {
              "en": "Next.js App Router on Vercel",
              "km": "ការដំណើរការ Next.js App Router លើ Vercel"
            },
            "subtitle": {
              "en": "Server Components, Client Components, and Edge routing",
              "km": "ស្ថាបត្យកម្ម Server Components, Client Components, និងការបញ្ជូនទិន្នន័យលើ Edge"
            },
            "href": "#/docs/vercel/39"
          },
          {
            "id": 40,
            "number": 40,
            "slideId": "slide-40",
            "title": {
              "en": "Static vs Dynamic Rendering Modes",
              "km": "ទម្រង់នៃការ Render: Static vs Dynamic"
            },
            "subtitle": {
              "en": "Controlling cache headers and server rendering behavior",
              "km": "ការគ្រប់គ្រង Cache Headers និងឥរិយាបថនៃការបង្កើតទំព័រលើ Server"
            },
            "href": "#/docs/vercel/40"
          },
          {
            "id": 41,
            "number": 41,
            "slideId": "slide-41",
            "title": {
              "en": "Server Actions & Route Handlers",
              "km": "Server Actions និង Route Handlers"
            },
            "subtitle": {
              "en": "Executing secure backend mutations on serverless functions",
              "km": "ការសរសេរកូដរក្សាទុកទិន្នន័យនៅលើ Serverless Functions ប្រកបដោយសុវត្ថិភាព"
            },
            "href": "#/docs/vercel/41"
          },
          {
            "id": 42,
            "number": 42,
            "slideId": "slide-42",
            "title": {
              "en": "Image Optimization & Global Edge",
              "km": "ការបង្កើនប្រសិទ្ធភាពរូបភាព និង Global Edge"
            },
            "subtitle": {
              "en": "Next.js image resizing, WebP conversion, and CDN distribution",
              "km": "ការបង្រួមទំហំរូបភាព, ការបម្លែងជា WebP, និងការចែកចាយតាមបណ្តាញ CDN សកល"
            },
            "href": "#/docs/vercel/42"
          }
        ]
      },
      {
        "id": "vercel-sec-12",
        "part": "NEON POSTGRESQL",
        "partKey": "part_12",
        "title": {
          "en": "PART 12: CHEAT SHEET",
          "km": "ផ្នែកទី ១២៖ តារាងសង្ខេបពាក្យបញ្ជា"
        },
        "lessons": [
          {
            "id": 43,
            "number": 43,
            "slideId": "slide-43",
            "title": {
              "en": "Fullstack Architecture: Vercel + Neon",
              "km": "ស្ថាបត្យកម្ម Fullstack: Vercel + Neon"
            },
            "subtitle": {
              "en": "Serverless web frontend connecting to serverless PostgreSQL",
              "km": "ការតភ្ជាប់រវាង Serverless Web Frontend ជាមួយ Serverless PostgreSQL Database"
            },
            "href": "#/docs/vercel/43"
          },
          {
            "id": 44,
            "number": 44,
            "slideId": "slide-44",
            "title": {
              "en": "Obtaining Neon Connection Strings",
              "km": "ការយក Connection String ពី Neon"
            },
            "subtitle": {
              "en": "Pooled connections with sslmode=require for serverless queries",
              "km": "ការប្រើប្រាស់ Pooled Connection ជាមួយ sslmode=require សម្រាប់ Serverless Queries"
            },
            "href": "#/docs/vercel/44"
          },
          {
            "id": 45,
            "number": 45,
            "slideId": "slide-45",
            "title": {
              "en": "Configuring DATABASE_URL in Vercel",
              "km": "ការបញ្ចូល DATABASE_URL ទៅក្នុង Vercel"
            },
            "subtitle": {
              "en": "Setting up separate database instances for preview and production",
              "km": "ការកំណត់ Database ដាច់ដោយឡែកពីគ្នាសម្រាប់ដំណាក់កាល Preview និង Production"
            },
            "href": "#/docs/vercel/45"
          },
          {
            "id": 46,
            "number": 46,
            "slideId": "slide-46",
            "title": {
              "en": "Database Migration Strategy",
              "km": "យុទ្ធសាស្ត្រនៃការ Run Database Migrations"
            },
            "subtitle": {
              "en": "Safely applying schema migrations before application deployment",
              "km": "ការផ្លាស់ប្តូរ Schema លើ Database ឱ្យបានជោគជ័យមុនពេល deploy កូដថ្មី"
            },
            "href": "#/docs/vercel/46"
          }
        ]
      },
      {
        "id": "vercel-sec-13",
        "part": "CUSTOM DOMAIN",
        "partKey": "part_13",
        "title": {
          "en": "PART 13: BEGINNER MISTAKES",
          "km": "ផ្នែកទី ១៣៖ កំហុសទូទៅរបស់អ្នកចាប់ផ្តើម"
        },
        "lessons": [
          {
            "id": 47,
            "number": 47,
            "slideId": "slide-47",
            "title": {
              "en": "Custom Domain Mental Model",
              "km": "ស្វែងយល់អំពី Custom Domain ផ្ទាល់ខ្លួន"
            },
            "subtitle": {
              "en": "Apex domains vs subdomains and how DNS routing operates",
              "km": "ភាពខុសគ្នារវាង Apex Domain និង Subdomain និងរបៀបដែលប្រព័ន្ធ DNS ដំណើរការ"
            },
            "href": "#/docs/vercel/47"
          },
          {
            "id": 48,
            "number": 48,
            "slideId": "slide-48",
            "title": {
              "en": "DNS Record Types: A vs CNAME",
              "km": "ប្រភេទនៃកំណត់ត្រា DNS: A Record vs CNAME"
            },
            "subtitle": {
              "en": "Configuring 76.76.21.21 for root and cname.vercel-dns.com for subdomains",
              "km": "ការកំណត់ 76.76.21.21 សម្រាប់ Root Domain និង cname.vercel-dns.com សម្រាប់ Subdomain"
            },
            "href": "#/docs/vercel/48"
          },
          {
            "id": 49,
            "number": 49,
            "slideId": "slide-49",
            "title": {
              "en": "Step-by-Step Registrar Configuration",
              "km": "ការកំណត់ DNS មួយជំហានម្តងៗលើ Registrar"
            },
            "subtitle": {
              "en": "Adding DNS records in Namecheap, Cloudflare, or GoDaddy",
              "km": "ការបញ្ចូលកំណត់ត្រា DNS លើ Namecheap, Cloudflare, ឬ GoDaddy"
            },
            "href": "#/docs/vercel/49"
          },
          {
            "id": 50,
            "number": 50,
            "slideId": "slide-50",
            "title": {
              "en": "Preserving Email DNS Records",
              "km": "ការការពារកុំឱ្យបាត់បង់ប្រព័ន្ធអ៊ីមែល (Email DNS)"
            },
            "subtitle": {
              "en": "Avoiding email disruption by protecting MX, SPF, DKIM, and DMARC",
              "km": "ការប្រុងប្រយ័ត្នក្នុងការថែរក្សាកំណត់ត្រា MX, SPF, DKIM, និង DMARC កុំឱ្យខូច"
            },
            "href": "#/docs/vercel/50"
          },
          {
            "id": 51,
            "number": 51,
            "slideId": "slide-51",
            "title": {
              "en": "DNS Propagation & Automatic SSL",
              "km": "ការរង់ចាំ DNS Propagation និង SSL ស្វ័យប្រវត្តិ"
            },
            "subtitle": {
              "en": "Let's Encrypt TLS certificate generation and HTTPS enforcement",
              "km": "ការបង្កើតវិញ្ញាបនបត្រ Let's Encrypt TLS និងការបើក HTTPS ដោយស្វ័យប្រវត្តិ"
            },
            "href": "#/docs/vercel/51"
          }
        ]
      },
      {
        "id": "vercel-sec-14",
        "part": "HTTPS &amp; SECURITY",
        "partKey": "part_14",
        "title": {
          "en": "PART 14: .GITIGNORE",
          "km": "ផ្នែកទី ១៤៖ ឯកសារ .GITIGNORE"
        },
        "lessons": [
          {
            "id": 52,
            "number": 52,
            "slideId": "slide-52",
            "title": {
              "en": "HTTPS & Transport Security",
              "km": "ប្រព័ន្ធសុវត្ថិភាព HTTPS និងការបញ្ជូនទិន្នន័យ"
            },
            "subtitle": {
              "en": "HSTS headers, modern TLS cipher suites, and redirect rules",
              "km": "ការប្រើប្រាស់ HSTS headers, កូដសម្ងាត់ទំនើប TLS, និងការបង្វែរ HTTP ទៅ HTTPS"
            },
            "href": "#/docs/vercel/52"
          },
          {
            "id": 53,
            "number": 53,
            "slideId": "slide-53",
            "title": {
              "en": "Application Hardening on Vercel",
              "km": "ការពង្រឹងប្រព័ន្ធសុវត្ថិភាពកម្មវិធីលើ Vercel"
            },
            "subtitle": {
              "en": "Content Security Policy (CSP), rate limiting, and input sanitization",
              "km": "ការកំណត់ Content Security Policy (CSP), ការគ្រប់គ្រង Rate Limiting, និងការច្រោះទិន្នន័យ"
            },
            "href": "#/docs/vercel/53"
          },
          {
            "id": 54,
            "number": 54,
            "slideId": "slide-54",
            "title": {
              "en": "Secret Auditing & Remediation",
              "km": "ការស្វែងរក និងទប់ស្កាត់ការធ្លាយកូដសម្ងាត់"
            },
            "subtitle": {
              "en": "Scanning repositories for leaks and rotating compromised credentials",
              "km": "ការ scan កូដក្នុង repository និងការផ្លាស់ប្តូរលេខសម្ងាត់ថ្មីជាបន្ទាន់"
            },
            "href": "#/docs/vercel/54"
          }
        ]
      },
      {
        "id": "vercel-sec-15",
        "part": "DEPLOYMENTS &amp; ROLLBACK",
        "partKey": "part_15",
        "title": {
          "en": "PART 15: COMPLETE WORKFLOW",
          "km": "ផ្នែកទី ១៥៖ ដំណើរការការងារពេញលេញ"
        },
        "lessons": [
          {
            "id": 55,
            "number": 55,
            "slideId": "slide-55",
            "title": {
              "en": "Immutable Deployments",
              "km": "គោលការណ៍ Immutable Deployments"
            },
            "subtitle": {
              "en": "Why every build is a permanent, immutable snapshot",
              "km": "មូលហេតុដែលគ្រប់ការ build ទាំងអស់ត្រូវបានរក្សាទុកជា snapshot អចិន្ត្រៃយ៍"
            },
            "href": "#/docs/vercel/55"
          },
          {
            "id": 56,
            "number": 56,
            "slideId": "slide-56",
            "title": {
              "en": "Instant Rollback Workflow",
              "km": "ដំណើរការ Rollback ភ្លាមៗក្នុងពេលមានអាសន្ន"
            },
            "subtitle": {
              "en": "Restoring a previous working deployment in seconds",
              "km": "ការស្តារឡើងវិញនូវកំណែដែលដំណើរការល្អមុន ក្នុងរយៈពេលតែប៉ុន្មានវិនាទីប៉ុណ្ណោះ"
            },
            "href": "#/docs/vercel/56"
          },
          {
            "id": 57,
            "number": 57,
            "slideId": "slide-57",
            "title": {
              "en": "The Code vs Database Rollback Discrepancy",
              "km": "ភាពខុសគ្នារវាង Code Rollback និង Database Schema"
            },
            "subtitle": {
              "en": "Why rolling back code does NOT undo database schema changes",
              "km": "ការយល់ដឹងថាការ Rollback កូដមិនអាចលុបការផ្លាស់ប្តូរលើ Database ឡើងវិញដោយស្វ័យប្រវត្តិនោះទេ"
            },
            "href": "#/docs/vercel/57"
          }
        ]
      },
      {
        "id": "vercel-sec-16",
        "part": "TROUBLESHOOTING",
        "partKey": "part_16",
        "title": {
          "en": "PART 16: HANDS-ON EXERCISE",
          "km": "ផ្នែកទី ១៦៖ លំហាត់អនុវត្តផ្ទាល់"
        },
        "lessons": [
          {
            "id": 58,
            "number": 58,
            "slideId": "slide-58",
            "title": {
              "en": "Build Logs vs Runtime Logs",
              "km": "ការប្រៀបធៀប Build Logs និង Runtime Logs"
            },
            "subtitle": {
              "en": "Differentiating compile-time failures from production exceptions",
              "km": "ការបែងចែកកំហុសនៅពេល Compile កូដ និងកំហុសពេលកំពុងដំណើរការជាក់ស្តែង"
            },
            "href": "#/docs/vercel/58"
          },
          {
            "id": 59,
            "number": 59,
            "slideId": "slide-59",
            "title": {
              "en": "Diagnosing Common Build Failures",
              "km": "ការដោះស្រាយបញ្ហា Build បរាជ័យទូទៅ"
            },
            "subtitle": {
              "en": "Missing dependencies, TypeScript errors, and incorrect root directory",
              "km": "បញ្ហាខ្វះ package, កំហុស TypeScript, និងការកំណត់ Root Directory ខុស"
            },
            "href": "#/docs/vercel/59"
          },
          {
            "id": 60,
            "number": 60,
            "slideId": "slide-60",
            "title": {
              "en": "Diagnosing Runtime 500 Errors",
              "km": "ការដោះស្រាយកំហុស Runtime 500 Errors"
            },
            "subtitle": {
              "en": "Database timeouts, connection exhaustion, and uncaught exceptions",
              "km": "បញ្ហាដាច់ការតភ្ជាប់ Database, លើសចំនួន Connection, និង Uncaught Exceptions"
            },
            "href": "#/docs/vercel/60"
          },
          {
            "id": 61,
            "number": 61,
            "slideId": "slide-61",
            "title": {
              "en": "The 5-Step Systematic Debugging Flow",
              "km": "ជំហានទាំង ៥ ក្នុងការដោះស្រាយបញ្ហាប្រកបដោយប្រសិទ្ធភាព"
            },
            "subtitle": {
              "en": "Reproduce -> Read Log -> Isolate Error -> Patch -> Verify",
              "km": "បង្កើតបញ្ហាឡើងវិញ -> អាន Log -> ស្វែងរកប្រភព -> កែសម្រួល -> ផ្ទៀងផ្ទាត់"
            },
            "href": "#/docs/vercel/61"
          }
        ]
      },
      {
        "id": "vercel-sec-17",
        "part": "PERFORMANCE",
        "partKey": "part_17",
        "title": {
          "en": "PART 17: PERFORMANCE & OPTIMIZATION",
          "km": "ផ្នែកទី ១៧៖ ការបង្កើនល្បឿន និង PERFORMANCE"
        },
        "lessons": [
          {
            "id": 62,
            "number": 62,
            "slideId": "slide-62",
            "title": {
              "en": "Build Performance & Turbopack",
              "km": "ការបង្កើនល្បឿន Build និង Turbopack"
            },
            "subtitle": {
              "en": "Utilizing build caching, package deduplication, and fast compilation",
              "km": "ការទាញយកប្រយោជន៍ពី Build Cache, ការលុបកញ្ចប់កូដដែលស្ទួន, និងការ compile លឿន"
            },
            "href": "#/docs/vercel/62"
          },
          {
            "id": 63,
            "number": 63,
            "slideId": "slide-63",
            "title": {
              "en": "Serverless Optimization & Connection Pooling",
              "km": "ការបង្កើនល្បឿន Serverless និង Connection Pooling"
            },
            "subtitle": {
              "en": "Preventing cold starts and connection limits with Neon Serverless driver",
              "km": "កាត់បន្ថយ Cold Starts និងការប្រើប្រាស់ Neon Serverless Driver"
            },
            "href": "#/docs/vercel/63"
          }
        ]
      },
      {
        "id": "vercel-sec-18",
        "part": "PLANS &amp; COSTS",
        "partKey": "part_18",
        "title": {
          "en": "PART 18: PLAN LIMITS & COSTS",
          "km": "ផ្នែកទី ១៨៖ ដែនកំណត់ PLAN និងការគ្រប់គ្រងចំណាយ"
        },
        "lessons": [
          {
            "id": 64,
            "number": 64,
            "slideId": "slide-64",
            "title": {
              "en": "Vercel Plan Limits & Cost Management",
              "km": "ដែនកំណត់នៃ Vercel Plan និងការគ្រប់គ្រងថ្លៃចំណាយ"
            },
            "subtitle": {
              "en": "Understanding Hobby vs Pro bandwidth, function duration, and spending controls",
              "km": "ការស្វែងយល់ពីកម្រិតប្រើប្រាស់លើ Hobby vs Pro និងការកំណត់ការជូនដំណឹង Spending Limits"
            },
            "href": "#/docs/vercel/64"
          }
        ]
      },
      {
        "id": "vercel-sec-19",
        "part": "GUIDED PROJECT",
        "partKey": "part_19",
        "title": {
          "en": "PART 19: GUIDED PROJECT: TASKFLOW",
          "km": "ផ្នែកទី ១៩៖ គម្រោងអនុវត្តផ្ទាល់៖ TASKFLOW"
        },
        "lessons": [
          {
            "id": 65,
            "number": 65,
            "slideId": "slide-65",
            "title": {
              "en": "Guided Project: TaskFlow Architecture",
              "km": "ស្ថាបត្យកម្មគម្រោងអនុវត្ត៖ TaskFlow"
            },
            "subtitle": {
              "en": "Production blueprint for Next.js, Neon PostgreSQL, and Vercel",
              "km": "ប្លង់មេនៃគម្រោងជាក់ស្តែងដែលប្រើ Next.js, Neon PostgreSQL, និង Vercel"
            },
            "href": "#/docs/vercel/65"
          },
          {
            "id": 66,
            "number": 66,
            "slideId": "slide-66",
            "title": {
              "en": "Interactive Deployment Simulator",
              "km": "ឧបករណ៍ក្លែងធ្វើការ Deploy ជាក់ស្តែង"
            },
            "subtitle": {
              "en": "Simulate connecting repos, setting env vars, building, and deploying",
              "km": "សាកល្បងភ្ជាប់ repo, កំណត់ env vars, ដំណើរការ build, និង deploy ផ្ទាល់"
            },
            "href": "#/docs/vercel/66"
          },
          {
            "id": 67,
            "number": 67,
            "slideId": "slide-67",
            "title": {
              "en": "Interactive Domain & DNS Simulator",
              "km": "ឧបករណ៍ក្លែងធ្វើការកំណត់ Domain & DNS"
            },
            "subtitle": {
              "en": "Experiment with Apex, CNAME, and SSL verification live",
              "km": "ពិសោធន៍ការកំណត់ Apex Domain, CNAME, និងការផ្ទៀងផ្ទាត់ SSL ផ្ទាល់"
            },
            "href": "#/docs/vercel/67"
          }
        ]
      },
      {
        "id": "vercel-sec-20",
        "part": "CHECKLIST",
        "partKey": "part_20",
        "title": {
          "en": "PART 20: PRODUCTION CHECKLIST",
          "km": "ផ្នែកទី ២០៖ តារាងផ្ទៀងផ្ទាត់ PRODUCTION CHECKLIST"
        },
        "lessons": [
          {
            "id": 68,
            "number": 68,
            "slideId": "slide-68",
            "title": {
              "en": "Interactive Production Checklist",
              "km": "តារាងត្រួតពិនិត្យ Production Checklist"
            },
            "subtitle": {
              "en": "Comprehensive interactive checklist saved to your browser",
              "km": "តារាងផ្ទៀងផ្ទាត់អន្តរកម្មដែលរក្សាទុកលទ្ធផលក្នុង browser របស់អ្នក"
            },
            "href": "#/docs/vercel/68"
          }
        ]
      },
      {
        "id": "vercel-sec-21",
        "part": "COMMON MISTAKES",
        "partKey": "part_21",
        "title": {
          "en": "PART 21: COMMON MISTAKES",
          "km": "ផ្នែកទី ២១៖ កំហុសទូទៅដែលត្រូវប្រុងប្រយ័ត្ន"
        },
        "lessons": [
          {
            "id": 69,
            "number": 69,
            "slideId": "slide-69",
            "title": {
              "en": "Top 10 Costly Deployment Mistakes",
              "km": "កំហុសធំៗទាំង ១០ ដែលត្រូវជៀសវាងជាដាច់ខាត"
            },
            "subtitle": {
              "en": "Critical errors developers make and exact steps to avoid them",
              "km": "កំហុសសំខាន់ៗដែលអ្នកសរសេរកម្មវិធីតែងតែជួបប្រទះ និងដំណោះស្រាយសុវត្ថិភាព"
            },
            "href": "#/docs/vercel/69"
          },
          {
            "id": 70,
            "number": 70,
            "slideId": "slide-70",
            "title": {
              "en": "Production Verification & Health Checks",
              "km": "ការត្រួតពិនិត្យចុងក្រោយលើប្រព័ន្ធ Production"
            },
            "subtitle": {
              "en": "End-to-end testing of auth, database CRUD, and responsiveness",
              "km": "ការធ្វើតេស្តប្រព័ន្ធ Auth, Database CRUD, និងល្បឿនឆ្លើយតបលើទូរស័ព្ទ"
            },
            "href": "#/docs/vercel/70"
          }
        ]
      },
      {
        "id": "vercel-sec-22",
        "part": "FINAL CHEAT SHEET",
        "partKey": "part_22",
        "title": {
          "en": "PART 22: FINAL CHEAT SHEET",
          "km": "ផ្នែកទី ២២៖ តារាងសង្ខេបពាក្យបញ្ជា (CHEAT SHEET)"
        },
        "lessons": [
          {
            "id": 71,
            "number": 71,
            "slideId": "slide-71",
            "title": {
              "en": "Vercel Deployment Cheat Sheet",
              "km": "តារាងសង្ខេបពាក្យបញ្ជា Vercel Deployment"
            },
            "subtitle": {
              "en": "Quick reference guide for CLI, Git commands, DNS values, and rules",
              "km": "ឯកសារយោងរហ័សនៃ CLI, ពាក្យបញ្ជា Git, តម្លៃ DNS, និងគោលការណ៍សំខាន់ៗ"
            },
            "href": "#/docs/vercel/71"
          },
          {
            "id": 72,
            "number": 72,
            "slideId": "slide-72",
            "title": {
              "en": "Course Summary & Master Architecture",
              "km": "សេចក្តីសង្ខេបបញ្ចប់ និងស្ថាបត្យកម្មពេញលេញ"
            },
            "subtitle": {
              "en": "Congratulations! You have mastered production web deployments on Vercel",
              "km": "អបអរសាទរ! អ្នកបានក្លាយជាអ្នកជំនាញក្នុងការ Deploy គេហទំព័រលើ Vercel ប្រកបដោយភាពជឿជាក់"
            },
            "href": "#/docs/vercel/72"
          }
        ]
      }
    ]
  },
  {
    "id": "cloudflare",
    "lessonKey": "l9",
    "module": "MODULE 08",
    "accent": "orange",
    "icon": "Cloud",
    "category": "devops",
    "title": {
      "en": "Cloudflare: Global Edge Infrastructure",
      "km": "Cloudflare: ហេដ្ឋារចនាសម្ព័ន្ធ Global Edge"
    },
    "desc": {
      "en": "From your first domain and DNS records to global CDN, WAF, Workers, R2 storage, SSL/TLS, and edge deployment for resilient web systems.",
      "km": "ចាប់ពីការចុះឈ្មោះ Domain និងកំណត់ត្រា DNS ដំបូង រហូតដល់ Global CDN, WAF, Workers, R2 Storage, SSL/TLS និងប្រព័ន្ធ Edge សម្រាប់ Web កម្រិត Production។"
    },
    "totalLessons": 85,
    "sections": [
      {
        "id": "cloudflare-sec-1",
        "part": "FOUNDATIONS",
        "partKey": "part_1",
        "title": {
          "en": "PART 1: INSTALLATION",
          "km": "ផ្នែកទី ១៖ ការដំឡើង"
        },
        "lessons": [
          {
            "id": 1,
            "number": 1,
            "slideId": "slide-1",
            "title": {
              "en": "Cloudflare: Zero to Production Complete Developer Web Masterclass",
              "km": "Cloudflare: ពីកម្រិតដំបូងដល់ Production វគ្គបណ្តុះបណ្តាលពេញលេញសម្រាប់ Developer"
            },
            "subtitle": {
              "en": "",
              "km": ""
            },
            "href": "#/docs/cloudflare/1"
          },
          {
            "id": 2,
            "number": 2,
            "slideId": "slide-2",
            "title": {
              "en": "What is Cloud Computing?",
              "km": "តើអ្វីទៅជា Cloud Computing?"
            },
            "subtitle": {
              "en": "From single bare-metal servers to globally distributed edge networks",
              "km": "ការវិវត្តពី Server តែមួយគ្រឿង (Bare-Metal) ទៅជាបណ្តាញ Edge ចែកចាយទូទាំងពិភពលោក"
            },
            "href": "#/docs/cloudflare/2"
          },
          {
            "id": 3,
            "number": 3,
            "slideId": "slide-3",
            "title": {
              "en": "Hosting Evolution: Dedicated to Edge",
              "km": "ការវិវត្តនៃការ Hosting៖ ពី Dedicated ទៅ Edge"
            },
            "subtitle": {
              "en": "Dedicated Servers → VPS → Managed Platforms → Serverless → Edge Compute",
              "km": "Dedicated Server → VPS → Managed Platform → Serverless → Edge Compute"
            },
            "href": "#/docs/cloudflare/3"
          },
          {
            "id": 4,
            "number": 4,
            "slideId": "slide-4",
            "title": {
              "en": "Why Cloudflare Operates Differently",
              "km": "ហេតុអ្វី Cloudflare ដំណើរការខុសពី VPS ធម្មតា?"
            },
            "subtitle": {
              "en": "Cloudflare is not a traditional VPS host — it is a Global Connectivity Cloud",
              "km": "Cloudflare មិនមែនជាកន្លែងជួលម៉ាស៊ីន VPS ទេ តែជា Global Connectivity Cloud"
            },
            "href": "#/docs/cloudflare/4"
          },
          {
            "id": 5,
            "number": 5,
            "slideId": "slide-5",
            "title": {
              "en": "What is Cloudflare?",
              "km": "តើអ្វីទៅជា Cloudflare?"
            },
            "subtitle": {
              "en": "The comprehensive edge platform between your visitors and your origins",
              "km": "វេទិកា Edge ដ៏ទូលំទូលាយដែលឈរនៅចន្លោះអ្នកប្រើប្រាស់ និង Origin Server របស់អ្នក"
            },
            "href": "#/docs/cloudflare/5"
          },
          {
            "id": 6,
            "number": 6,
            "slideId": "slide-6",
            "title": {
              "en": "Beyond Just 'Hosting'",
              "km": "លើសពីពាក្យថា \"Hosting\" ធម្មតា"
            },
            "subtitle": {
              "en": "A multi-layered ecosystem: Networking, Security, CDN, Compute, and Storage",
              "km": "ប្រព័ន្ធអេកូឡូស៊ីពហុស្រទាប់៖ Networking, Security, CDN, Compute និង Storage"
            },
            "href": "#/docs/cloudflare/6"
          },
          {
            "id": 7,
            "number": 7,
            "slideId": "slide-7",
            "title": {
              "en": "Global Anycast Edge Network",
              "km": "បណ្តាញ Anycast Edge សកលលោក"
            },
            "subtitle": {
              "en": "How 330+ data centers deliver ultra-low latency and DDoS absorption",
              "km": "របៀបដែលមជ្ឈមណ្ឌលទិន្នន័យជាង ៣៣០ កន្លែងផ្តល់ល្បឿនលឿន និងស្រូបទាញការវាយប្រហារ DDoS"
            },
            "href": "#/docs/cloudflare/7"
          }
        ]
      },
      {
        "id": "cloudflare-sec-2",
        "part": "DOMAINS & ACCOUNTS",
        "partKey": "part_2",
        "title": {
          "en": "PART 2: CREATE A PROJECT",
          "km": "ផ្នែកទី ២៖ បង្កើតគម្រោង"
        },
        "lessons": [
          {
            "id": 8,
            "number": 8,
            "slideId": "slide-8",
            "title": {
              "en": "Creating Your Cloudflare Account",
              "km": "ការបង្កើតគណនី Cloudflare"
            },
            "subtitle": {
              "en": "Step-by-step account onboarding, verification, and first look",
              "km": "ជំហានលម្អិតសម្រាប់ការចុះឈ្មោះ ផ្ទៀងផ្ទាត់អ៊ីមែល និងស្វែងយល់ Dashboard ដំបូង"
            },
            "href": "#/docs/cloudflare/8"
          },
          {
            "id": 9,
            "number": 9,
            "slideId": "slide-9",
            "title": {
              "en": "Account Security: 2FA & Scoped Tokens",
              "km": "សុវត្ថិភាពគណនី៖ 2FA និង Scoped API Tokens"
            },
            "subtitle": {
              "en": "Protecting your infrastructure with hardware keys, TOTP, and least privilege",
              "km": "ការពារហេដ្ឋារចនាសម្ព័ន្ធដោយប្រើ Security Keys, TOTP និងគោលការណ៍សិទ្ធិតិចបំផុត (Least Privilege)"
            },
            "href": "#/docs/cloudflare/9"
          },
          {
            "id": 10,
            "number": 10,
            "slideId": "slide-10",
            "title": {
              "en": "Accounts, Organizations & Zones",
              "km": "Accounts, Organizations និង Zones"
            },
            "subtitle": {
              "en": "Understanding the hierarchy: Account Scope vs Zone (Domain) Scope",
              "km": "ស្វែងយល់អំពីកម្រិតគ្រប់គ្រង៖ កម្រិតគណនី (Account Scope) និងកម្រិតដែន (Zone Scope)"
            },
            "href": "#/docs/cloudflare/10"
          },
          {
            "id": 11,
            "number": 11,
            "slideId": "slide-11",
            "title": {
              "en": "Understanding Domains & DNS",
              "km": "ស្វែងយល់អំពី Domain និង DNS"
            },
            "subtitle": {
              "en": "Apex domains, subdomains, TLDs, and the domain hierarchy",
              "km": "Apex Domain, Subdomain, TLDs និងឋានានុក្រមនៃឈ្មោះដែន"
            },
            "href": "#/docs/cloudflare/11"
          },
          {
            "id": 12,
            "number": 12,
            "slideId": "slide-12",
            "title": {
              "en": "Registrar vs DNS Provider vs Web Host",
              "km": "Registrar vs DNS Provider vs Web Host"
            },
            "subtitle": {
              "en": "Three distinct roles often confused by early-career developers",
              "km": "តួនាទីដាច់ដោយឡែកទាំង ៣ ដែលអ្នកអភិវឌ្ឍន៍ដំបូងតែងតែយល់ច្រឡំ"
            },
            "href": "#/docs/cloudflare/12"
          },
          {
            "id": 13,
            "number": 13,
            "slideId": "slide-13",
            "title": {
              "en": "Domain Scenarios: Third-Party vs Registrar",
              "km": "សេណារីយ៉ូនៃ Domain៖ ទិញពីក្រៅ vs Cloudflare Registrar"
            },
            "subtitle": {
              "en": "Scenario A (External Registrar) vs Scenario B (Cloudflare Registrar)",
              "km": "សេណារីយ៉ូ A (Registrar ខាងក្រៅ) ប្រៀបធៀបនឹងសេណារីយ៉ូ B (Cloudflare Registrar)"
            },
            "href": "#/docs/cloudflare/13"
          },
          {
            "id": 14,
            "number": 14,
            "slideId": "slide-14",
            "title": {
              "en": "Adding an Existing Domain to Cloudflare",
              "km": "ការបន្ថែម Domain ដែលមានស្រាប់ទៅ Cloudflare"
            },
            "subtitle": {
              "en": "The 6-step onboarding workflow to safely migrate your zone",
              "km": "ជំហានទាំង ៦ ក្នុងការ Onboard និងផ្លាស់ប្តូរ Zone ប្រកបដោយសុវត្ថិភាព"
            },
            "href": "#/docs/cloudflare/14"
          },
          {
            "id": 15,
            "number": 15,
            "slideId": "slide-15",
            "title": {
              "en": "CRITICAL: Review Existing DNS First",
              "km": "ការប្រុងប្រយ័ត្នខ្ពស់៖ ពិនិត្យ DNS ចាស់ជាមុនសិន"
            },
            "subtitle": {
              "en": "Why updating nameservers without auditing DNS can take down your company",
              "km": "មូលហេតុដែលការប្តូរ Nameservers ដោយមិនបានពិនិត្យ DNS អាចធ្វើឱ្យប្រព័ន្ធទាំងមូលដួលរលំ"
            },
            "href": "#/docs/cloudflare/15"
          }
        ]
      },
      {
        "id": "cloudflare-sec-3",
        "part": "NAMESERVERS & DNS",
        "partKey": "part_3",
        "title": {
          "en": "PART 3: CHECK PROJECT STATUS",
          "km": "ផ្នែកទី ៣៖ ពិនិត្យស្ថានភាពគម្រោង"
        },
        "lessons": [
          {
            "id": 16,
            "number": 16,
            "slideId": "slide-16",
            "title": {
              "en": "Nameservers Explained",
              "km": "ការពន្យល់អំពី Nameservers"
            },
            "subtitle": {
              "en": "Authoritative nameservers vs Recursive resolvers and delegation",
              "km": "Authoritative Nameservers ប្រៀបធៀបនឹង Recursive Resolvers និងដំណើរការ Delegation"
            },
            "href": "#/docs/cloudflare/16"
          },
          {
            "id": 17,
            "number": 17,
            "slideId": "slide-17",
            "title": {
              "en": "How DNS Resolution Works Step-by-Step",
              "km": "របៀបដែល DNS ដោះស្រាយឈ្មោះជាជំហានៗ"
            },
            "subtitle": {
              "en": "Following a DNS query from browser cache to Cloudflare Anycast",
              "km": "តាមដានដំណើរសំណួរ DNS ពី Cache នៃ Browser រហូតដល់ Anycast របស់ Cloudflare"
            },
            "href": "#/docs/cloudflare/17"
          },
          {
            "id": 18,
            "number": 18,
            "slideId": "slide-18",
            "title": {
              "en": "Core DNS Records: A, AAAA & CNAME",
              "km": "DNS Records ស្នូល៖ A, AAAA និង CNAME"
            },
            "subtitle": {
              "en": "IPv4 addresses, IPv6 addresses, and canonical alias routing",
              "km": "អាសយដ្ឋាន IPv4, អាសយដ្ឋាន IPv6 និងការកំណត់ឈ្មោះតំណាង (Canonical Alias)"
            },
            "href": "#/docs/cloudflare/18"
          },
          {
            "id": 19,
            "number": 19,
            "slideId": "slide-19",
            "title": {
              "en": "Service DNS Records: MX, TXT, NS, CAA & SRV",
              "km": "DNS Records សម្រាប់សេវាកម្ម៖ MX, TXT, NS, CAA និង SRV"
            },
            "subtitle": {
              "en": "Routing email, domain verification, nameservers, and certificate authorities",
              "km": "ការបញ្ជូនអ៊ីមែល ការផ្ទៀងផ្ទាត់ភាពជាម្ចាស់ និងសិទ្ធិចេញវិញ្ញាបនបត្រ SSL"
            },
            "href": "#/docs/cloudflare/19"
          },
          {
            "id": 20,
            "number": 20,
            "slideId": "slide-20",
            "title": {
              "en": "INTERACTIVE: Simulated DNS Editor",
              "km": "អន្តរកម្ម៖ ឧបករណ៍សាកល្បង Cloudflare DNS"
            },
            "subtitle": {
              "en": "Practice adding A, CNAME, and MX records with simulated resolution",
              "km": "អនុវត្តការបន្ថែម Record A, CNAME និង MX ព្រមទាំងមើលការដោះស្រាយសំណួរជាក់ស្ដែង"
            },
            "href": "#/docs/cloudflare/20"
          }
        ]
      },
      {
        "id": "cloudflare-sec-4",
        "part": "PROXY & REVERSE PROXY",
        "partKey": "part_4",
        "title": {
          "en": "PART 4: STAGING",
          "km": "ផ្នែកទី ៤៖ STAGING AREA"
        },
        "lessons": [
          {
            "id": 21,
            "number": 21,
            "slideId": "slide-21",
            "title": {
              "en": "Proxy Status: Proxied vs DNS Only",
              "km": "Proxy Status: Proxied vs DNS Only"
            },
            "subtitle": {
              "en": "The crucial difference between the Orange Cloud and Grey Cloud",
              "km": "ភាពខុសគ្នាដ៏សំខាន់រវាងពពកពណ៌ទឹកក្រូច (Orange Cloud) និងពពកពណ៌ប្រផេះ (Grey Cloud)"
            },
            "href": "#/docs/cloudflare/21"
          },
          {
            "id": 22,
            "number": 22,
            "slideId": "slide-22",
            "title": {
              "en": "When to Proxy vs When NOT to Proxy",
              "km": "ពេលណាត្រូវ Proxy និងពេលណា មិនត្រូវ Proxy"
            },
            "subtitle": {
              "en": "Proxy HTTP/HTTPS websites — Do NOT proxy SSH, FTP, or raw TCP/UDP (unless Spectrum)",
              "km": "Proxy សម្រាប់វេបសាយ HTTP/HTTPS — កុំ Proxy លើ SSH, FTP ឬ TCP/UDP ទូទៅ (លើកលែងតែប្រើ Spectrum)"
            },
            "href": "#/docs/cloudflare/22"
          },
          {
            "id": 23,
            "number": 23,
            "slideId": "slide-23",
            "title": {
              "en": "Understanding Reverse Proxies",
              "km": "ស្វែងយល់អំពី Reverse Proxy"
            },
            "subtitle": {
              "en": "How Cloudflare terminates connections and shields origin IP addresses",
              "km": "របៀបដែល Cloudflare បញ្ចប់ការតភ្ជាប់ និងលាក់អាសយដ្ឋាន IP ពិតប្រាកដរបស់ Origin Server"
            },
            "href": "#/docs/cloudflare/23"
          },
          {
            "id": 24,
            "number": 24,
            "slideId": "slide-24",
            "title": {
              "en": "Reverse Proxy Inspection & Headers",
              "km": "ការត្រួតពិនិត្យ និង Headers របស់ Reverse Proxy"
            },
            "subtitle": {
              "en": "CF-Connecting-IP, X-Forwarded-For, TLS termination, and header rewriting",
              "km": "CF-Connecting-IP, X-Forwarded-For, ការបញ្ចប់ TLS និងការកែប្រែ Headers"
            },
            "href": "#/docs/cloudflare/24"
          }
        ]
      },
      {
        "id": "cloudflare-sec-5",
        "part": "CDN & CACHING",
        "partKey": "part_5",
        "title": {
          "en": "PART 5: COMMIT",
          "km": "ផ្នែកទី ៥៖ ការ COMMIT"
        },
        "lessons": [
          {
            "id": 25,
            "number": 25,
            "slideId": "slide-25",
            "title": {
              "en": "What is a Content Delivery Network (CDN)?",
              "km": "តើអ្វីជា Content Delivery Network (CDN)?"
            },
            "subtitle": {
              "en": "Bringing static content closer to users worldwide to slash latency",
              "km": "ការនាំយកទិន្នន័យ Static ទៅដាក់ជិតអ្នកប្រើប្រាស់ជុំវិញពិភពលោកដើម្បីកាត់បន្ថយ Latency"
            },
            "href": "#/docs/cloudflare/25"
          },
          {
            "id": 26,
            "number": 26,
            "slideId": "slide-26",
            "title": {
              "en": "CDN Cache Hit vs Cache Miss Anatomy",
              "km": "កាយវិភាគនៃ CDN Cache Hit vs Cache Miss"
            },
            "subtitle": {
              "en": "User in Cambodia requested an asset: Edge delivery vs Origin fetch",
              "km": "អ្នកប្រើប្រាស់នៅកម្ពុជាស្នើសុំទិន្នន័យ៖ ការទាញយកពី Edge ទល់នឹងការរត់ទៅ Origin Server"
            },
            "href": "#/docs/cloudflare/26"
          },
          {
            "id": 27,
            "number": 27,
            "slideId": "slide-27",
            "title": {
              "en": "The Three Levels of Caching",
              "km": "កម្រិតទាំង ៣ នៃប្រព័ន្ធ Caching"
            },
            "subtitle": {
              "en": "Browser Cache → Cloudflare CDN Edge Cache → Origin Application Cache",
              "km": "Browser Cache → Cloudflare CDN Edge Cache → Origin Application Cache"
            },
            "href": "#/docs/cloudflare/27"
          },
          {
            "id": 28,
            "number": 28,
            "slideId": "slide-28",
            "title": {
              "en": "Cache-Control Headers & Edge TTL",
              "km": "Cache-Control Headers និង Edge TTL"
            },
            "subtitle": {
              "en": "Mastering max-age, s-maxage, public, private, and stale-while-revalidate",
              "km": "ស្វែងយល់ច្បាស់ពី max-age, s-maxage, public, private និង stale-while-revalidate"
            },
            "href": "#/docs/cloudflare/28"
          },
          {
            "id": 29,
            "number": 29,
            "slideId": "slide-29",
            "title": {
              "en": "Cache Invalidation: Purging Strategies",
              "km": "យុទ្ធសាស្ត្រលុប Cache (Purging Strategies)"
            },
            "subtitle": {
              "en": "Purge Everything (nuclear option) vs Single URL vs Cache-Tags",
              "km": "Purge Everything (ជម្រើសធ្ងន់ធ្ងរ) vs Single URL vs ការលុបតាម Cache-Tags"
            },
            "href": "#/docs/cloudflare/29"
          },
          {
            "id": 30,
            "number": 30,
            "slideId": "slide-30",
            "title": {
              "en": "Caching Dynamic vs Static Content",
              "km": "ការកំណត់ Cache លើ Dynamic vs Static Content"
            },
            "subtitle": {
              "en": "Never cache authenticated user sessions, cookies, or sensitive API payloads",
              "km": "ហាមដាច់ខាតមិនត្រូវ Cache ព័ត៌មាន Login របស់ User, Cookies ឬទិន្នន័យ API សម្ងាត់ឡើយ"
            },
            "href": "#/docs/cloudflare/30"
          }
        ]
      },
      {
        "id": "cloudflare-sec-6",
        "part": "SSL / TLS & ENCRYPTION",
        "partKey": "part_6",
        "title": {
          "en": "PART 6: CREATE GITHUB REPOSITORY",
          "km": "ផ្នែកទី ៦៖ បង្កើត GITHUB REPOSITORY"
        },
        "lessons": [
          {
            "id": 31,
            "number": 31,
            "slideId": "slide-31",
            "title": {
              "en": "SSL / TLS Encryption Fundamentals",
              "km": "មូលដ្ឋានគ្រឹះនៃការអ៊ិនគ្រីប SSL / TLS"
            },
            "subtitle": {
              "en": "HTTP vs HTTPS, asymmetric encryption, certificates, and handshake",
              "km": "HTTP vs HTTPS, ការអ៊ិនគ្រីប Asymmetric, វិញ្ញាបនបត្រឌីជីថល និង Handshake"
            },
            "href": "#/docs/cloudflare/31"
          },
          {
            "id": 32,
            "number": 32,
            "slideId": "slide-32",
            "title": {
              "en": "The Security Illusion: Edge vs Origin",
              "km": "ការយល់ច្រឡំអំពីសុវត្ថិភាព៖ Edge vs Origin"
            },
            "subtitle": {
              "en": "Encrypting Browser-to-Cloudflare is only HALF the connection",
              "km": "ការអ៊ិនគ្រីបត្រឹមតែចន្លោះ Browser ទៅ Cloudflare គឺទើបតែបានពាក់កណ្តាលផ្លូវប៉ុណ្ណោះ"
            },
            "href": "#/docs/cloudflare/32"
          },
          {
            "id": 33,
            "number": 33,
            "slideId": "slide-33",
            "title": {
              "en": "Cloudflare SSL / TLS Modes Explained",
              "km": "ការពន្យល់អំពី SSL / TLS Modes របស់ Cloudflare"
            },
            "subtitle": {
              "en": "Off, Flexible, Full, and Full (Strict) architectural comparison",
              "km": "ការប្រៀបធៀបស្ថាបត្យកម្មរវាង Off, Flexible, Full និង Full (Strict)"
            },
            "href": "#/docs/cloudflare/33"
          },
          {
            "id": 34,
            "number": 34,
            "slideId": "slide-34",
            "title": {
              "en": "Why Flexible SSL is Dangerous",
              "km": "មូលហេតុដែល Flexible SSL មានគ្រោះថ្នាក់បំផុត"
            },
            "subtitle": {
              "en": "Preventing Man-In-The-Middle attacks between Cloudflare and your origin",
              "km": "ការពារការលួចស្ទាក់ចាប់ទិន្នន័យ (MITM) រវាង Cloudflare និង Origin Server របស់អ្នក"
            },
            "href": "#/docs/cloudflare/34"
          },
          {
            "id": 35,
            "number": 35,
            "slideId": "slide-35",
            "title": {
              "en": "Cloudflare Origin CA Certificates",
              "km": "វិញ្ញាបនបត្រ Cloudflare Origin CA"
            },
            "subtitle": {
              "en": "Free 15-year certificates installed directly on Nginx, Apache, or Caddy",
              "km": "វិញ្ញាបនបត្រឥតគិតថ្លៃមានសុពលភាព ១៥ ឆ្នាំសម្រាប់តម្លើងលើ Nginx, Apache ឬ Caddy"
            },
            "href": "#/docs/cloudflare/35"
          },
          {
            "id": 36,
            "number": 36,
            "slideId": "slide-36",
            "title": {
              "en": "Domain + HTTPS Production Workflow",
              "km": "លំហូរការងាររៀបចំ Domain + HTTPS ក្នុង Production"
            },
            "subtitle": {
              "en": "End-to-end checklist for zero-downtime, fully verified HTTPS setup",
              "km": "បញ្ជីផ្ទៀងផ្ទាត់សម្រាប់ការដំឡើង HTTPS ពេញលេញដោយគ្មានការដាច់សេវា (Zero-Downtime)"
            },
            "href": "#/docs/cloudflare/36"
          }
        ]
      },
      {
        "id": "cloudflare-sec-7",
        "part": "EDGE SECURITY",
        "partKey": "part_7",
        "title": {
          "en": "PART 7: CONNECT LOCAL TO GITHUB",
          "km": "ផ្នែកទី ៧៖ ភ្ជាប់ LOCAL ទៅ GITHUB"
        },
        "lessons": [
          {
            "id": 37,
            "number": 37,
            "slideId": "slide-37",
            "title": {
              "en": "DDoS Protection at Edge Scale",
              "km": "ការការពារ DDoS នៅលើបណ្តាញ Edge សកល"
            },
            "subtitle": {
              "en": "Volumetric floods (SYN, UDP) and Layer 7 HTTP application attacks",
              "km": "ការទប់ស្កាត់ការវាយប្រហារធំៗកម្រិត Volumetric (SYN, UDP) និង Layer 7 Application Floods"
            },
            "href": "#/docs/cloudflare/37"
          },
          {
            "id": 38,
            "number": 38,
            "slideId": "slide-38",
            "title": {
              "en": "Web Application Firewall (WAF)",
              "km": "Web Application Firewall (WAF)"
            },
            "subtitle": {
              "en": "Managed Core Rules vs Custom Rules for blocking exploits and SQLi/XSS",
              "km": "វិធានស្នូលដែលគ្រប់គ្រងដោយ Cloudflare និង Custom Rules ដើម្បីទប់ស្កាត់ SQLi និង XSS"
            },
            "href": "#/docs/cloudflare/38"
          },
          {
            "id": 39,
            "number": 39,
            "slideId": "slide-39",
            "title": {
              "en": "WAF Rule Actions & Threat Detection",
              "km": "សកម្មភាពរបស់ WAF និងការរកឃើញការគំរាមកំហែង"
            },
            "subtitle": {
              "en": "Choosing between Allow, Managed Challenge (Turnstile), and Block",
              "km": "ការជ្រើសរើសរវាង Allow, Managed Challenge (Turnstile) និង Block"
            },
            "href": "#/docs/cloudflare/39"
          },
          {
            "id": 40,
            "number": 40,
            "slideId": "slide-40",
            "title": {
              "en": "Rate Limiting for Critical Endpoints",
              "km": "Rate Limiting សម្រាប់ Endpoint សំខាន់ៗ"
            },
            "subtitle": {
              "en": "Safeguarding /api/login, password reset, checkout, and AI inference routes",
              "km": "ការពារផ្លូវ /api/login, ការ Reset ពាក្យសម្ងាត់, ប្រព័ន្ធ Checkout និងផ្លូវ AI Inference"
            },
            "href": "#/docs/cloudflare/40"
          },
          {
            "id": 41,
            "number": 41,
            "slideId": "slide-41",
            "title": {
              "en": "Bot Management & Automated Traffic",
              "km": "ការគ្រប់គ្រង Bot និងចរាចរណ៍ស្វ័យប្រវត្តិ"
            },
            "subtitle": {
              "en": "Detecting content scrapers, credential stuffers, and allowing verified search bots",
              "km": "ការរកឃើញកម្មវិធីកោសទិន្នន័យ (Scrapers), Bot អាក្រក់ និងការអនុញ្ញាត Bot ស្របច្បាប់"
            },
            "href": "#/docs/cloudflare/41"
          }
        ]
      },
      {
        "id": "cloudflare-sec-8",
        "part": "RULES & ROUTING",
        "partKey": "part_8",
        "title": {
          "en": "PART 8: FIRST PUSH",
          "km": "ផ្នែកទី ៨៖ ការ PUSH លើកដំបូង"
        },
        "lessons": [
          {
            "id": 42,
            "number": 42,
            "slideId": "slide-42",
            "title": {
              "en": "The Cloudflare Rules Architecture",
              "km": "ស្ថាបត្យកម្ម Cloudflare Rules"
            },
            "subtitle": {
              "en": "Redirect Rules, Transform Rules, Cache Rules, and Configuration Rules",
              "km": "Redirect Rules, Transform Rules, Cache Rules និង Configuration Rules"
            },
            "href": "#/docs/cloudflare/42"
          },
          {
            "id": 43,
            "number": 43,
            "slideId": "slide-43",
            "title": {
              "en": "Canonical Redirects: HTTP/HTTPS & Apex/WWW",
              "km": "ការបញ្ជូនទិសដៅ៖ HTTP/HTTPS និង Apex/WWW"
            },
            "subtitle": {
              "en": "Creating clean 301 Permanent Redirects without hitting origin servers",
              "km": "ការបង្កើត 301 Permanent Redirects យ៉ាងរហ័សនៅកម្រិត Edge ដោយមិនបាច់រត់ដល់ Origin"
            },
            "href": "#/docs/cloudflare/43"
          },
          {
            "id": 44,
            "number": 44,
            "slideId": "slide-44",
            "title": {
              "en": "Custom Domain Architecture",
              "km": "ស្ថាបត្យកម្ម Custom Subdomain"
            },
            "subtitle": {
              "en": "Managing apex, www, app, api, admin, and cdn subdomains under one zone",
              "km": "ការគ្រប់គ្រង apex, www, app, api, admin និង cdn ក្រោម Zone តែមួយ"
            },
            "href": "#/docs/cloudflare/44"
          }
        ]
      },
      {
        "id": "cloudflare-sec-9",
        "part": "PRODUCTION FULLSTACK",
        "partKey": "part_9",
        "title": {
          "en": "PART 9: FUTURE CHANGES",
          "km": "ផ្នែកទី ៩៖ ការផ្លាស់ប្តូរទៅមុខទៀត"
        },
        "lessons": [
          {
            "id": 45,
            "number": 45,
            "slideId": "slide-45",
            "title": {
              "en": "Cloudflare + Vercel Architecture",
              "km": "ស្ថាបត្យកម្ម Cloudflare + Vercel"
            },
            "subtitle": {
              "en": "Visitor → Cloudflare (DNS/WAF) → Vercel (Next.js) → Neon (PostgreSQL)",
              "km": "អ្នកទស្សនា → Cloudflare (DNS/WAF) → Vercel (Next.js) → Neon (PostgreSQL)"
            },
            "href": "#/docs/cloudflare/45"
          },
          {
            "id": 46,
            "number": 46,
            "slideId": "slide-46",
            "title": {
              "en": "Cloudflare + Self-Hosted VPS Architecture",
              "km": "ស្ថាបត្យកម្ម Cloudflare + VPS ផ្ទាល់ខ្លួន"
            },
            "subtitle": {
              "en": "Visitor → Cloudflare → Nginx / Docker → Application → PostgreSQL",
              "km": "អ្នកទស្សនា → Cloudflare → Nginx / Docker → Application → PostgreSQL"
            },
            "href": "#/docs/cloudflare/46"
          }
        ]
      },
      {
        "id": "cloudflare-sec-10",
        "part": "WORKERS & EDGE COMPUTE",
        "partKey": "part_10",
        "title": {
          "en": "PART 10: CLONE AN EXISTING PROJECT",
          "km": "ផ្នែកទី ១០៖ CLONE គម្រោងដែលមានស្រាប់"
        },
        "lessons": [
          {
            "id": 47,
            "number": 47,
            "slideId": "slide-47",
            "title": {
              "en": "Introduction to Cloudflare Workers",
              "km": "សេចក្តីណែនាំអំពី Cloudflare Workers"
            },
            "subtitle": {
              "en": "Edge serverless execution powered by V8 isolates with 0ms cold starts",
              "km": "ការដំណើរការកូដ Serverless នៅលើ Edge ដំណើរការដោយ V8 Isolates ជាមួយ 0ms Cold Start"
            },
            "href": "#/docs/cloudflare/47"
          },
          {
            "id": 48,
            "number": 48,
            "slideId": "slide-48",
            "title": {
              "en": "Anatomy of a Cloudflare Worker",
              "km": "កាយវិភាគនៃ Cloudflare Worker"
            },
            "subtitle": {
              "en": "The standard fetch handler, Request, Response, and Context objects",
              "km": "ស្វែងយល់អំពី fetch handler ស្តង់ដារ, Request, Response និង Context Objects"
            },
            "href": "#/docs/cloudflare/48"
          },
          {
            "id": 49,
            "number": 49,
            "slideId": "slide-49",
            "title": {
              "en": "Creating Your First Worker",
              "km": "ការបង្កើត Worker ដំបូងរបស់អ្នក"
            },
            "subtitle": {
              "en": "Dashboard live editor vs modern local development with Wrangler CLI",
              "km": "ការសរសេរលើ Dashboard ផ្ទាល់ ប្រៀបធៀបនឹងការអភិវឌ្ឍន៍ក្នុងម៉ាស៊ីនជាមួយ Wrangler CLI"
            },
            "href": "#/docs/cloudflare/49"
          },
          {
            "id": 50,
            "number": 50,
            "slideId": "slide-50",
            "title": {
              "en": "Worker Routes & Custom Hostnames",
              "km": "Worker Routes និង Custom Hostnames"
            },
            "subtitle": {
              "en": "Binding Workers to api.example.com/* or intercepting origin traffic",
              "km": "ការភ្ជាប់ Worker ទៅកាន់ api.example.com/* ឬការកែប្រែសំណើមុនពេលទៅដល់ Origin"
            },
            "href": "#/docs/cloudflare/50"
          },
          {
            "id": 51,
            "number": 51,
            "slideId": "slide-51",
            "title": {
              "en": "Building an Edge API with Workers",
              "km": "ការបង្កើត Edge API ជាមួយ Workers"
            },
            "subtitle": {
              "en": "Handling HTTP methods, JSON responses, CORS headers, and error handling",
              "km": "ការគ្រប់គ្រង HTTP Methods, JSON Responses, CORS Headers និងការដោះស្រាយ Error"
            },
            "href": "#/docs/cloudflare/51"
          },
          {
            "id": 52,
            "number": 52,
            "slideId": "slide-52",
            "title": {
              "en": "Secrets, Env Variables & Bindings",
              "km": "Secrets, Environment Variables និង Bindings"
            },
            "subtitle": {
              "en": "Securing API keys and binding storage primitives without client leaks",
              "km": "ការរក្សាទុក API Keys ដោយសុវត្ថិភាព និងការភ្ជាប់ទៅកាន់ Storage ដោយគ្មានការធ្លាយចេញក្រៅ"
            },
            "href": "#/docs/cloudflare/52"
          }
        ]
      },
      {
        "id": "cloudflare-sec-11",
        "part": "STORAGE PRIMITIVES",
        "partKey": "part_11",
        "title": {
          "en": "PART 11: BRANCHES",
          "km": "ផ្នែកទី ១១៖ BRANCHES (មែកធាងកូដ)"
        },
        "lessons": [
          {
            "id": 53,
            "number": 53,
            "slideId": "slide-53",
            "title": {
              "en": "Cloudflare R2 Object Storage",
              "km": "Cloudflare R2 Object Storage"
            },
            "subtitle": {
              "en": "S3-compatible object storage with ZERO data egress bandwidth fees",
              "km": "ការផ្ទុកទិន្នន័យស្របតាមស្តង់ដារ S3 ដោយគ្មានការគិតថ្លៃ Bandwidth Egress ឡើយ"
            },
            "href": "#/docs/cloudflare/53"
          },
          {
            "id": 54,
            "number": 54,
            "slideId": "slide-54",
            "title": {
              "en": "Practical R2: TaskFlow Avatar Storage",
              "km": "ការអនុវត្តផ្ទាល់លើ R2៖ ការផ្ទុក Avatar ក្នុង TaskFlow"
            },
            "subtitle": {
              "en": "Secure image uploads via Worker, pre-signed URLs, and bucket permissions",
              "km": "ការ Upload រូបភាពប្រកបដោយសុវត្ថិភាពតាមរយៈ Worker, Pre-signed URLs និងសិទ្ធិ Bucket"
            },
            "href": "#/docs/cloudflare/54"
          },
          {
            "id": 55,
            "number": 55,
            "slideId": "slide-55",
            "title": {
              "en": "Cloudflare KV: Global Key-Value Store",
              "km": "Cloudflare KV: Global Key-Value Store"
            },
            "subtitle": {
              "en": "High-read, low-write eventual consistency for configuration and caches",
              "km": "ការអានលឿនបំផុតកម្រិតសកលលោក ស័ក្តិសមសម្រាប់ការកំណត់ Configuration និង Session Cache"
            },
            "href": "#/docs/cloudflare/55"
          },
          {
            "id": 56,
            "number": 56,
            "slideId": "slide-56",
            "title": {
              "en": "Cloudflare Durable Objects",
              "km": "Cloudflare Durable Objects"
            },
            "subtitle": {
              "en": "Strongly consistent, stateful coordination for real-time multiplayer & WebSockets",
              "km": "ការគ្រប់គ្រង State ប្រកបដោយភាពស៊ីសង្វាក់គ្នាខ្ពស់សម្រាប់ Real-Time Multiplayer និង WebSockets"
            },
            "href": "#/docs/cloudflare/56"
          },
          {
            "id": 57,
            "number": 57,
            "slideId": "slide-57",
            "title": {
              "en": "Cloudflare Queues: Background Jobs",
              "km": "Cloudflare Queues: ការងារ Background Jobs"
            },
            "subtitle": {
              "en": "Guaranteed message delivery for email, heavy processing, and webhooks",
              "km": "ការបញ្ជូនសារប្រកបដោយទំនុកចិត្តសម្រាប់ការផ្ញើអ៊ីមែល ការកែច្នៃរូបភាព និង Webhooks"
            },
            "href": "#/docs/cloudflare/57"
          }
        ]
      },
      {
        "id": "cloudflare-sec-12",
        "part": "ZERO TRUST & TUNNELS",
        "partKey": "part_12",
        "title": {
          "en": "PART 12: CHEAT SHEET",
          "km": "ផ្នែកទី ១២៖ តារាងសង្ខេបពាក្យបញ្ជា"
        },
        "lessons": [
          {
            "id": 58,
            "number": 58,
            "slideId": "slide-58",
            "title": {
              "en": "Cloudflare Zero Trust Architecture",
              "km": "ស្ថាបត្យកម្ម Cloudflare Zero Trust"
            },
            "subtitle": {
              "en": "Never trust, always verify: Identity-based security replacing legacy VPNs",
              "km": "កុំទុកចិត្ត ត្រូវផ្ទៀងផ្ទាត់ជានិច្ច៖ សុវត្ថិភាពផ្អែកលើអត្តសញ្ញាណ ជំនួសឱ្យប្រព័ន្ធ VPN ចាស់គំរឹល"
            },
            "href": "#/docs/cloudflare/58"
          },
          {
            "id": 59,
            "number": 59,
            "slideId": "slide-59",
            "title": {
              "en": "Cloudflare Access for Private Apps",
              "km": "Cloudflare Access សម្រាប់កម្មវិធីផ្ទៃក្នុង"
            },
            "subtitle": {
              "en": "Protect internal admin dashboards with Google, GitHub, or Okta SSO",
              "km": "ការពារផ្ទាំងគ្រប់គ្រង Admin ផ្ទៃក្នុងដោយប្រើ Google, GitHub ឬ Okta SSO"
            },
            "href": "#/docs/cloudflare/59"
          },
          {
            "id": 60,
            "number": 60,
            "slideId": "slide-60",
            "title": {
              "en": "Cloudflare Tunnel (cloudflared)",
              "km": "Cloudflare Tunnel (cloudflared)"
            },
            "subtitle": {
              "en": "Secure outbound-only connection from private servers without open ports",
              "km": "ការតភ្ជាប់ចេញក្រៅប្រកបដោយសុវត្ថិភាពពី Server ឯកជន ដោយមិនបាច់បើក Inbound Ports ឡើយ"
            },
            "href": "#/docs/cloudflare/60"
          },
          {
            "id": 61,
            "number": 61,
            "slideId": "slide-61",
            "title": {
              "en": "Practical Tunnel: Exposing Localhost",
              "km": "ការអនុវត្ត Tunnel៖ ការបង្ហាញ Localhost ទៅកាន់ពិភពលោក"
            },
            "subtitle": {
              "en": "Exposing localhost:3000 to app.example.com securely in 3 minutes",
              "km": "ការបង្ហាញ localhost:3000 ទៅកាន់ app.example.com ដោយសុវត្ថិភាពក្នុងរយៈពេល ៣ នាទី"
            },
            "href": "#/docs/cloudflare/61"
          }
        ]
      },
      {
        "id": "cloudflare-sec-13",
        "part": "DEVELOPER TOOLING",
        "partKey": "part_13",
        "title": {
          "en": "PART 13: BEGINNER MISTAKES",
          "km": "ផ្នែកទី ១៣៖ កំហុសទូទៅរបស់អ្នកចាប់ផ្តើម"
        },
        "lessons": [
          {
            "id": 62,
            "number": 62,
            "slideId": "slide-62",
            "title": {
              "en": "Cloudflare API & Scoped Tokens",
              "km": "Cloudflare API និង Scoped Tokens"
            },
            "subtitle": {
              "en": "Automating zone settings and deployments using least-privilege tokens",
              "km": "ការគ្រប់គ្រង និង Deploy ប្រព័ន្ធដោយស្វ័យប្រវត្តិតាមរយៈ Token ដែលមានសិទ្ធិតិចបំផុត"
            },
            "href": "#/docs/cloudflare/62"
          },
          {
            "id": 63,
            "number": 63,
            "slideId": "slide-63",
            "title": {
              "en": "Wrangler CLI Development Workflow",
              "km": "លំហូរការងារជាមួយ Wrangler CLI"
            },
            "subtitle": {
              "en": "wrangler dev, deploy, tail, and configuring wrangler.jsonc / toml",
              "km": "ការប្រើប្រាស់ wrangler dev, deploy, tail និងការកំណត់ឯកសារ wrangler.jsonc / toml"
            },
            "href": "#/docs/cloudflare/63"
          },
          {
            "id": 64,
            "number": 64,
            "slideId": "slide-64",
            "title": {
              "en": "Git Integration & CI/CD Pipelines",
              "km": "ការតភ្ជាប់ជាមួយ Git និង CI/CD Pipelines"
            },
            "subtitle": {
              "en": "Automating Workers and Pages deployments from GitHub pull requests",
              "km": "ការ Deploy ដោយស្វ័យប្រវត្តិនូវ Workers និង Pages ពី GitHub Pull Requests"
            },
            "href": "#/docs/cloudflare/64"
          }
        ]
      },
      {
        "id": "cloudflare-sec-14",
        "part": "PAGES & JAMSTACK",
        "partKey": "part_14",
        "title": {
          "en": "PART 14: .GITIGNORE",
          "km": "ផ្នែកទី ១៤៖ ឯកសារ .GITIGNORE"
        },
        "lessons": [
          {
            "id": 65,
            "number": 65,
            "slideId": "slide-65",
            "title": {
              "en": "Cloudflare Pages Platform",
              "km": "វេទិកា Cloudflare Pages"
            },
            "subtitle": {
              "en": "Modern Jamstack and fullstack web hosting with automatic Git deployments",
              "km": "ការ Hosting វេបសាយ Jamstack និង Fullstack ទំនើបជាមួយការ Deploy ដោយស្វ័យប្រវត្តិតាម Git"
            },
            "href": "#/docs/cloudflare/65"
          },
          {
            "id": 66,
            "number": 66,
            "slideId": "slide-66",
            "title": {
              "en": "Pages vs Vercel vs Traditional VPS",
              "km": "Pages vs Vercel vs Traditional VPS"
            },
            "subtitle": {
              "en": "Architectural comparison: strengths, trade-offs, and when to pick each",
              "km": "ការប្រៀបធៀបស្ថាបត្យកម្ម៖ ចំណុចខ្លាំង ការសម្របសម្រួល និងពេលណាគួរជ្រើសរើសមួយណា"
            },
            "href": "#/docs/cloudflare/66"
          },
          {
            "id": 67,
            "number": 67,
            "slideId": "slide-67",
            "title": {
              "en": "Deploying a Static Web App to Pages",
              "km": "ការដាក់ឱ្យប្រើប្រាស់ Static Web App លើ Pages"
            },
            "subtitle": {
              "en": "Connecting GitHub repository, build configurations, and custom domains",
              "km": "ការភ្ជាប់ GitHub Repository ការកំណត់ Build Command និងការភ្ជាប់ Custom Domain"
            },
            "href": "#/docs/cloudflare/67"
          },
          {
            "id": 68,
            "number": 68,
            "slideId": "slide-68",
            "title": {
              "en": "Next.js on Cloudflare: Real-World Guide",
              "km": "Next.js នៅលើ Cloudflare៖ មេរៀនជាក់ស្តែង"
            },
            "subtitle": {
              "en": "Static export vs OpenNext vs edge runtime considerations and compatibility",
              "km": "Static Export vs OpenNext vs ការពិចារណាលើភាពឆបគ្នានៃ Edge Runtime"
            },
            "href": "#/docs/cloudflare/68"
          }
        ]
      },
      {
        "id": "cloudflare-sec-15",
        "part": "SAFETY & MIGRATION",
        "partKey": "part_15",
        "title": {
          "en": "PART 15: COMPLETE WORKFLOW",
          "km": "ផ្នែកទី ១៥៖ ដំណើរការការងារពេញលេញ"
        },
        "lessons": [
          {
            "id": 69,
            "number": 69,
            "slideId": "slide-69",
            "title": {
              "en": "Email DNS: MX, SPF, DKIM & DMARC",
              "km": "សុវត្ថិភាព Email DNS: MX, SPF, DKIM និង DMARC"
            },
            "subtitle": {
              "en": "How to prevent broken corporate email when transferring DNS to Cloudflare",
              "km": "How to prevent broken corporate email when transferring DNS to Cloudflare"
            },
            "href": "#/docs/cloudflare/69"
          },
          {
            "id": 70,
            "number": 70,
            "slideId": "slide-70",
            "title": {
              "en": "Pre-Migration DNS Safety Checklist",
              "km": "បញ្ជីត្រួតពិនិត្យសុវត្ថិភាពមុនពេលប្តូរ DNS"
            },
            "subtitle": {
              "en": "10 critical audit checks before changing nameservers at your registrar",
              "km": "ការត្រួតពិនិត្យសំខាន់ៗទាំង ១០ មុនពេលផ្លាស់ប្តូរ Nameservers នៅ Registrar"
            },
            "href": "#/docs/cloudflare/70"
          },
          {
            "id": 71,
            "number": 71,
            "slideId": "slide-71",
            "title": {
              "en": "DNSSEC: Security & Migration Gotchas",
              "km": "DNSSEC: សុវត្ថិភាព និងបញ្ហាប្រឈមពេលផ្លាស់ប្តូរ"
            },
            "subtitle": {
              "en": "Cryptographic validation of DNS records and how misconfigured DS records break resolution",
              "km": "ការផ្ទៀងផ្ទាត់គ្រីបតូក្រាហ្វិកនៃ DNS និងរបៀបដែលកំហុសកំណត់ត្រា DS អាចធ្វើឱ្យដាច់ការតភ្ជាប់"
            },
            "href": "#/docs/cloudflare/71"
          }
        ]
      },
      {
        "id": "cloudflare-sec-16",
        "part": "SECURITY & OBSERVABILITY",
        "partKey": "part_16",
        "title": {
          "en": "PART 16: HANDS-ON EXERCISE",
          "km": "ផ្នែកទី ១៦៖ លំហាត់អនុវត្តផ្ទាល់"
        },
        "lessons": [
          {
            "id": 72,
            "number": 72,
            "slideId": "slide-72",
            "title": {
              "en": "Defense in Depth Security Model",
              "km": "គំរូសុវត្ថិភាពការពារពហុស្រទាប់ (Defense in Depth)"
            },
            "subtitle": {
              "en": "Multi-layered perimeter: DNS → DDoS → WAF → Rate Limit → TLS → Access → Origin",
              "km": "ស្រទាប់ការពារជាច្រើនជាន់៖ DNS → DDoS → WAF → Rate Limit → TLS → Access → Origin"
            },
            "href": "#/docs/cloudflare/72"
          },
          {
            "id": 73,
            "number": 73,
            "slideId": "slide-73",
            "title": {
              "en": "Origin Server Hardening",
              "km": "ការពង្រឹងសុវត្ថិភាព Origin Server"
            },
            "subtitle": {
              "en": "Restricting origin firewall to Cloudflare IP ranges and Authenticated Origin Pulls",
              "km": "ការកំណត់ Firewall ឱ្យទទួលតែ IP របស់ Cloudflare និងការប្រើ Authenticated Origin Pulls"
            },
            "href": "#/docs/cloudflare/73"
          },
          {
            "id": 74,
            "number": 74,
            "slideId": "slide-74",
            "title": {
              "en": "Observability, Logs & Analytics",
              "km": "ការតាមដានទិន្នន័យ (Observability, Logs & Analytics)"
            },
            "subtitle": {
              "en": "Monitoring HTTP traffic, cache hit ratios, security events, and wrangler tail",
              "km": "ការវិភាគចរាចរណ៍ HTTP, អត្រា Cache Hit, ព្រឹត្តិការណ៍សន្តិសុខ និងការមើល logs តាម wrangler tail"
            },
            "href": "#/docs/cloudflare/74"
          }
        ]
      },
      {
        "id": "cloudflare-sec-17",
        "part": "TROUBLESHOOTING",
        "partKey": "part_17",
        "title": {
          "en": "PART 17: PERFORMANCE & OPTIMIZATION",
          "km": "ផ្នែកទី ១៧៖ ការបង្កើនល្បឿន និង PERFORMANCE"
        },
        "lessons": [
          {
            "id": 75,
            "number": 75,
            "slideId": "slide-75",
            "title": {
              "en": "Troubleshooting: DNS Failures",
              "km": "ការដោះស្រាយបញ្ហា៖ បញ្ហាដាច់ DNS"
            },
            "subtitle": {
              "en": "Systematic diagnostic tree: nameserver verification, dig queries, and TTL",
              "km": "មែកធាងវិភាគជាប្រព័ន្ធ៖ ការផ្ទៀងផ្ទាត់ Nameserver, សំណួរ dig និងការពិនិត្យ TTL"
            },
            "href": "#/docs/cloudflare/75"
          },
          {
            "id": 76,
            "number": 76,
            "slideId": "slide-76",
            "title": {
              "en": "Troubleshooting: SSL & Redirect Loops",
              "km": "ការដោះស្រាយបញ្ហា៖ កំហុស SSL និង Redirect Loops"
            },
            "subtitle": {
              "en": "Diagnosing ERR_TOO_MANY_REDIRECTS, pending certificates, and mixed content",
              "km": "ការដោះស្រាយ ERR_TOO_MANY_REDIRECTS, វិញ្ញាបនបត្ររង់ចាំ និងកំហុស Mixed Content"
            },
            "href": "#/docs/cloudflare/76"
          },
          {
            "id": 77,
            "number": 77,
            "slideId": "slide-77",
            "title": {
              "en": "Troubleshooting: 502 & 504 Errors",
              "km": "ការដោះស្រាយបញ្ហា៖ កំហុស 502 និង 504"
            },
            "subtitle": {
              "en": "Is the origin down, port closed, firewall blocking Cloudflare, or timing out?",
              "km": "តើ Origin Server ដួលរលំ, ច្រក Port ត្រូវបានបិទ, Firewall រារាំង Cloudflare ឬផុតពេលកំណត់?"
            },
            "href": "#/docs/cloudflare/77"
          },
          {
            "id": 78,
            "number": 78,
            "slideId": "slide-78",
            "title": {
              "en": "INTERACTIVE: Diagnostic Simulator",
              "km": "អន្តរកម្ម៖ ឧបករណ៍ក្លែងធ្វើការដោះស្រាយបញ្ហាជាក់ស្ដែង"
            },
            "subtitle": {
              "en": "Test your diagnostic skills across real-world Cloudflare production outages",
              "km": "សាកល្បងជំនាញវិភាគរបស់អ្នកលើសេណារីយ៉ូគាំងប្រព័ន្ធក្នុងពិភពពិត"
            },
            "href": "#/docs/cloudflare/78"
          }
        ]
      },
      {
        "id": "cloudflare-sec-18",
        "part": "PERFORMANCE & PLANS",
        "partKey": "part_18",
        "title": {
          "en": "PART 18: PLAN LIMITS & COSTS",
          "km": "ផ្នែកទី ១៨៖ ដែនកំណត់ PLAN និងការគ្រប់គ្រងចំណាយ"
        },
        "lessons": [
          {
            "id": 79,
            "number": 79,
            "slideId": "slide-79",
            "title": {
              "en": "Performance Optimization at the Edge",
              "km": "ការបង្កើនល្បឿននៅកម្រិត Edge"
            },
            "subtitle": {
              "en": "Brotli compression, Early Hints, HTTP/3 (QUIC), and cache optimization",
              "km": "ការបង្ហាប់ទិន្នន័យ Brotli, Early Hints, បច្ចេកវិទ្យា HTTP/3 (QUIC) និងការបង្កើនប្រសិទ្ធភាព Cache"
            },
            "href": "#/docs/cloudflare/79"
          },
          {
            "id": 80,
            "number": 80,
            "slideId": "slide-80",
            "title": {
              "en": "Cloudflare Plans & Cost Awareness",
              "km": "កញ្ចប់តម្លៃ និងការគ្រប់គ្រងថ្លៃដើមរបស់ Cloudflare"
            },
            "subtitle": {
              "en": "Understanding Free tier limits, Pro, Pay-as-you-go Workers/R2, and Enterprise features",
              "km": "ស្វែងយល់អំពីកម្រិត Free, កញ្ចប់ Pro, ការគិតថ្លៃតាមការប្រើប្រាស់លើ Workers/R2 និងមុខងារ Enterprise"
            },
            "href": "#/docs/cloudflare/80"
          }
        ]
      },
      {
        "id": "cloudflare-sec-19",
        "part": "PROJECT & CHECKLIST",
        "partKey": "part_19",
        "title": {
          "en": "PART 19: GUIDED PROJECT: TASKFLOW",
          "km": "ផ្នែកទី ១៩៖ គម្រោងអនុវត្តផ្ទាល់៖ TASKFLOW"
        },
        "lessons": [
          {
            "id": 81,
            "number": 81,
            "slideId": "slide-81",
            "title": {
              "en": "TaskFlow Cloud Master Architecture",
              "km": "ស្ថាបត្យកម្មមេ TaskFlow Cloud ក្នុង Production"
            },
            "subtitle": {
              "en": "End-to-end production topology integrating Cloudflare, Next.js, and Neon",
              "km": "Topology ពេញលេញដែលរួមបញ្ចូលគ្នា Cloudflare, Next.js និង Neon PostgreSQL"
            },
            "href": "#/docs/cloudflare/81"
          },
          {
            "id": 82,
            "number": 82,
            "slideId": "slide-82",
            "title": {
              "en": "INTERACTIVE: Production Launch Checklist",
              "km": "អន្តរកម្ម៖ បញ្ជីផ្ទៀងផ្ទាត់មុនពេលបើកដំណើរការ Production"
            },
            "subtitle": {
              "en": "Interactive 20-point checklist saved to localStorage for your next launch",
              "km": "បញ្ជីត្រួតពិនិត្យ ២០ ចំណុចដែលអាចធីកបាន និងរក្សាទុកក្នុង localStorage ដោយស្វ័យប្រវត្តិ"
            },
            "href": "#/docs/cloudflare/82"
          },
          {
            "id": 83,
            "number": 83,
            "slideId": "slide-83",
            "title": {
              "en": "INTERACTIVE: Architecture Explorer",
              "km": "អន្តរកម្ម៖ ឧបករណ៍រុករកស្ថាបត្យកម្ម Cloudflare"
            },
            "subtitle": {
              "en": "Click through Cloudflare layers to visualize data flow and responsibilities",
              "km": "ចុចលើស្រទាប់នីមួយៗរបស់ Cloudflare ដើម្បីមើលលំហូរទិន្នន័យ និងទំនួលខុសត្រូវ"
            },
            "href": "#/docs/cloudflare/83"
          },
          {
            "id": 84,
            "number": 84,
            "slideId": "slide-84",
            "title": {
              "en": "Top 10 Costly Cloudflare Mistakes",
              "km": "កំហុសធ្ងន់ធ្ងរទាំង ១០ ដែលត្រូវចៀសវាងលើ Cloudflare"
            },
            "subtitle": {
              "en": "Avoid common pitfalls that cause downtime, security leaks, and email failures",
              "km": "ចៀសវាងកំហុសទូទៅដែលនាំឱ្យដួលរលំវេបសាយ ធ្លាយទិន្នន័យ និងខូចប្រព័ន្ធអ៊ីមែល"
            },
            "href": "#/docs/cloudflare/84"
          },
          {
            "id": 85,
            "number": 85,
            "slideId": "slide-85",
            "title": {
              "en": "The Master Cloudflare Cheat Sheet",
              "km": "ផ្ទាំងសង្ខេបមេ Cloudflare Developer Cheat Sheet"
            },
            "subtitle": {
              "en": "Essential summary, key mental models, command reference, and best practices",
              "km": "ការសង្ខេបសំខាន់ៗ គំរូផ្នត់គំនិត បញ្ជីពាក្យបញ្ជា និងការអនុវត្តល្អបំផុតសម្រាប់ Developer"
            },
            "href": "#/docs/cloudflare/85"
          }
        ]
      }
    ]
  },
  {
    "id": "prompting",
    "lessonKey": "l8",
    "module": "MODULE 09",
    "accent": "emerald",
    "icon": "Sparkles",
    "category": "ai",
    "title": {
      "en": "Prompt Engineering & AI Development",
      "km": "Prompt Engineering & ការអភិវឌ្ឍជាមួយ AI"
    },
    "desc": {
      "en": "Master prompt engineering, logical reasoning, codebase analysis, and safe coding agent workflows. Learn to evaluate evidence, plan architecture, and verify results.",
      "km": "ស្វែងយល់ស៊ីជម្រៅពី Prompt Engineering, ការគិតបែបរិះគន់, ការវិភាគ Codebase, និងដំណើរការការងារប្រកបដោយសុវត្ថិភាពជាមួយ AI Coding Agents ព្រមទាំងការផ្ទៀងផ្ទាត់លទ្ធផល។"
    },
    "totalLessons": 75,
    "sections": [
      {
        "id": "prompting-sec-1",
        "part": "SECTION 01: UNDERSTANDING AI",
        "partKey": "",
        "title": {
          "en": "UNDERSTANDING AI",
          "km": "UNDERSTANDING AI"
        },
        "lessons": [
          {
            "id": 1,
            "number": 1,
            "slideId": "slide-1",
            "title": {
              "en": "What AI Is and How Language Models Work",
              "km": "តើអ្វីទៅជា AI និងរបៀបដែល Language Model ដំណើរការ"
            },
            "subtitle": {
              "en": "Probabilistic text prediction vs. deterministic computation",
              "km": "ការទស្សន៍ទាយពាក្យតាមប្រូបាប៊ីលីតេ vs ការគណនាកូដពិតប្រាកដ"
            },
            "href": "#/docs/prompting/1"
          },
          {
            "id": 2,
            "number": 2,
            "slideId": "slide-2",
            "title": {
              "en": "Hallucinations & Failure Modes",
              "km": "ការយល់សប្តិរបស់ AI (Hallucinations) & កំហុសទូទៅ"
            },
            "subtitle": {
              "en": "Why AI invents APIs, packages, and syntax out of thin air",
              "km": "មូលហេតុដែល AI បង្កើត API, Package និង Syntax ក្លែងក្លាយ"
            },
            "href": "#/docs/prompting/2"
          },
          {
            "id": 3,
            "number": 3,
            "slideId": "slide-3",
            "title": {
              "en": "The Verification Protocol",
              "km": "ពិធីសារផ្ទៀងផ្ទាត់ (Verification Protocol)"
            },
            "subtitle": {
              "en": "Evidence-based software engineering with AI assistance",
              "km": "ការសរសេរ Software ផ្អែកលើភស្តុតាងជាក់ស្ដែងជាមួយជំនួយការ AI"
            },
            "href": "#/docs/prompting/3"
          }
        ]
      },
      {
        "id": "prompting-sec-2",
        "part": "SECTION 02: WHAT IS A PROMPT?",
        "partKey": "",
        "title": {
          "en": "WHAT IS A PROMPT?",
          "km": "WHAT IS A PROMPT?"
        },
        "lessons": [
          {
            "id": 4,
            "number": 4,
            "slideId": "slide-4",
            "title": {
              "en": "Vague Requests vs. Precise Specifications",
              "km": "សំណួរមិនច្បាស់លាស់ vs Specification ជាក់លាក់"
            },
            "subtitle": {
              "en": "Why 'make me a website' fails and detailed prompts succeed",
              "km": "ហេតុអ្វីបានជា 'ធ្វើវេបសាយឱ្យខ្ញុំមួយ' មិនដំណើរការ ហើយ prompt លម្អិតទទួលបានជោគជ័យ"
            },
            "href": "#/docs/prompting/4"
          },
          {
            "id": 5,
            "number": 5,
            "slideId": "slide-5",
            "title": {
              "en": "Weak vs. Strong Prompt Comparison",
              "km": "ការប្រៀបធៀប Prompt ខ្សោយ vs Prompt ខ្លាំង"
            },
            "subtitle": {
              "en": "Deconstructing prompt quality with real engineering examples",
              "km": "ការវិភាគគុណភាព Prompt ជាមួយឧទាហរណ៍ជាក់ស្ដែងក្នុងវិស្វកម្មកូដ"
            },
            "href": "#/docs/prompting/5"
          },
          {
            "id": 6,
            "number": 6,
            "slideId": "slide-6",
            "title": {
              "en": "The Prompt Economy",
              "km": "សេដ្ឋកិច្ចនៃ Prompt (Prompt Economy)"
            },
            "subtitle": {
              "en": "Token budgets, signal-to-noise ratio, and prompt hygiene",
              "km": "កម្រិត Token, សមាមាត្រព័ត៌មានសំខាន់ (Signal-to-Noise) និងអនាម័យ Prompt"
            },
            "href": "#/docs/prompting/6"
          }
        ]
      },
      {
        "id": "prompting-sec-3",
        "part": "SECTION 03: THE PROMPT FORMULA",
        "partKey": "",
        "title": {
          "en": "THE PROMPT FORMULA",
          "km": "THE PROMPT FORMULA"
        },
        "lessons": [
          {
            "id": 7,
            "number": 7,
            "slideId": "slide-7",
            "title": {
              "en": "The 7-Pillar Universal Prompt Formula",
              "km": "រូបមន្តសកល ៧ សសរស្តម្ភសម្រាប់ PROMPT"
            },
            "subtitle": {
              "en": "Role + Goal + Context + Requirements + Constraints + Output + Verification",
              "km": "Role + Goal + Context + Requirements + Constraints + Output + Verification"
            },
            "href": "#/docs/prompting/7"
          },
          {
            "id": 8,
            "number": 8,
            "slideId": "slide-8",
            "title": {
              "en": "Constraints, Output & Verification",
              "km": "លក្ខខណ្ឌហាមឃាត់ (Constraints), Output & ការផ្ទៀងផ្ទាត់"
            },
            "subtitle": {
              "en": "Guarding boundaries and defining proof of correctness",
              "km": "ការកំណត់ព្រំដែនការពារ និងការបញ្ជាក់ភស្តុតាងនៃភាពត្រឹមត្រូវ"
            },
            "href": "#/docs/prompting/8"
          },
          {
            "id": 9,
            "number": 9,
            "slideId": "slide-9",
            "title": {
              "en": "Formula in Action: Fullstack Optimization",
              "km": "ការអនុវត្តរូបមន្តជាក់ស្ដែង៖ ការបង្កើនល្បឿន Query"
            },
            "subtitle": {
              "en": "A production example applying all 7 prompt pillars",
              "km": "ឧទាហរណ៍លើគម្រោង Production ដោយប្រើប្រាស់សសរស្តម្ភទាំង ៧"
            },
            "href": "#/docs/prompting/9"
          }
        ]
      },
      {
        "id": "prompting-sec-4",
        "part": "SECTION 04: CONTEXT IS EVERYTHING",
        "partKey": "",
        "title": {
          "en": "CONTEXT IS EVERYTHING",
          "km": "CONTEXT IS EVERYTHING"
        },
        "lessons": [
          {
            "id": 10,
            "number": 10,
            "slideId": "slide-10",
            "title": {
              "en": "Context Density & Attention Allocation",
              "km": "ដង់ស៊ីតេ Context & ការបែងចែកការយកចិត្តទុកដាក់របស់ AI"
            },
            "subtitle": {
              "en": "How language models process context windows and why relevance matters",
              "km": "របៀបដែល AI ដំណើរការ Context Window និងហេតុអ្វីបានជាភាពពាក់ព័ន្ធមានសារៈសំខាន់"
            },
            "href": "#/docs/prompting/10"
          },
          {
            "id": 11,
            "number": 11,
            "slideId": "slide-11",
            "title": {
              "en": "Context Pyramid: What to Include",
              "km": "ពីរ៉ាមីតនៃ Context៖ អ្វីដែលគួរដាក់បញ្ចូល"
            },
            "subtitle": {
              "en": "Structuring contextual information from foundation to incident",
              "km": "ការរៀបចំព័ត៌មានបរិបទពីគ្រឹះរហូតដល់បញ្ហាដែលកំពុងកើតឡើង"
            },
            "href": "#/docs/prompting/11"
          },
          {
            "id": 12,
            "number": 12,
            "slideId": "slide-12",
            "title": {
              "en": "The Minimal Sufficient Context Rule",
              "km": "ច្បាប់ Context អប្បបរមាដែលគ្រប់គ្រាន់ (Minimal Context)"
            },
            "subtitle": {
              "en": "Maximizing model intelligence while eliminating noise",
              "km": "បង្កើនភាពឆ្លាតវៃរបស់ AI ដោយលុបបំបាត់ព័ត៌មានរំខាន"
            },
            "href": "#/docs/prompting/12"
          }
        ]
      },
      {
        "id": "prompting-sec-5",
        "part": "SECTION 05: DEFINE THE ROLE CORRECTLY",
        "partKey": "",
        "title": {
          "en": "DEFINE THE ROLE CORRECTLY",
          "km": "DEFINE THE ROLE CORRECTLY"
        },
        "lessons": [
          {
            "id": 13,
            "number": 13,
            "slideId": "slide-13",
            "title": {
              "en": "Role Priming: Framing Perspectives",
              "km": "ការកំណត់តួនាទី (Role Priming)"
            },
            "subtitle": {
              "en": "Guiding the model's vocabulary, skepticism, and review standards",
              "km": "ការដឹកនាំវាក្យសព្ទ កម្រិតនៃការត្រួតពិនិត្យ និងស្តង់ដារគុណភាពរបស់ AI"
            },
            "href": "#/docs/prompting/13"
          },
          {
            "id": 14,
            "number": 14,
            "slideId": "slide-14",
            "title": {
              "en": "The Expert Personas Catalog",
              "km": "កាតាឡុក Personas ជំនាញវិស្វកម្ម"
            },
            "subtitle": {
              "en": "Targeted personas for distinct software engineering disciplines",
              "km": "តួនាទីជាក់លាក់សម្រាប់ផ្នែកនីមួយៗនៃការអភិវឌ្ឍ Software"
            },
            "href": "#/docs/prompting/14"
          },
          {
            "id": 15,
            "number": 15,
            "slideId": "slide-15",
            "title": {
              "en": "Role-Playing Does Not Guarantee Accuracy",
              "km": "ការកំណត់ Role មិនធានាថាចម្លើយត្រឹមត្រូវ ១០០% ទេ"
            },
            "subtitle": {
              "en": "A critical boundary: Persona sets tone, not verified expertise",
              "km": "ព្រំដែនសំខាន់៖ តួនាទីកំណត់ទស្សនវិស័យ មិនមែនបង្កើតសមត្ថភាពវេទមន្តឡើយ"
            },
            "href": "#/docs/prompting/15"
          }
        ]
      },
      {
        "id": "prompting-sec-6",
        "part": "SECTION 06: REQUIREMENTS &amp; CONSTRAINTS",
        "partKey": "",
        "title": {
          "en": "REQUIREMENTS & CONSTRAINTS",
          "km": "REQUIREMENTS & CONSTRAINTS"
        },
        "lessons": [
          {
            "id": 16,
            "number": 16,
            "slideId": "slide-16",
            "title": {
              "en": "Requirements vs. Constraints",
              "km": "តម្រូវការ (Requirements) vs លក្ខខណ្ឌហាមឃាត់ (Constraints)"
            },
            "subtitle": {
              "en": "Defining what must be accomplished versus what must never happen",
              "km": "កំណត់អ្វីដែលត្រូវតែធ្វើឱ្យបានសម្រេច vs អ្វីដែលមិនត្រូវធ្វើជាដាច់ខាត"
            },
            "href": "#/docs/prompting/16"
          },
          {
            "id": 17,
            "number": 17,
            "slideId": "slide-17",
            "title": {
              "en": "Guardrails for Legacy & Production Systems",
              "km": "រនាំងការពារសម្រាប់ប្រព័ន្ធចាស់ & Production"
            },
            "subtitle": {
              "en": "Preventing accidental rewrites, breaking changes, and visual degradation",
              "km": "ការពារការសរសេរឡើងវិញទាំងស្រុង ការបែកបាក់ និងការខូចទ្រង់ទ្រាយ UI"
            },
            "href": "#/docs/prompting/17"
          },
          {
            "id": 18,
            "number": 18,
            "slideId": "slide-18",
            "title": {
              "en": "Writing Strict Acceptance Criteria",
              "km": "ការសរសេរលក្ខខណ្ឌទទួលយកកូដ (Acceptance Criteria)"
            },
            "subtitle": {
              "en": "The checklist that turns subjective tasks into binary passes or fails",
              "km": "បញ្ជីត្រួតពិនិត្យដែលបំប្លែងកិច្ចការមិនច្បាស់លាស់ឱ្យទៅជាលទ្ធផល Pass ឬ Fail"
            },
            "href": "#/docs/prompting/18"
          }
        ]
      },
      {
        "id": "prompting-sec-7",
        "part": "SECTION 07: ASK AI TO ANALYZE BEFORE CODING",
        "partKey": "",
        "title": {
          "en": "ASK AI TO ANALYZE BEFORE CODING",
          "km": "ASK AI TO ANALYZE BEFORE CODING"
        },
        "lessons": [
          {
            "id": 19,
            "number": 19,
            "slideId": "slide-19",
            "title": {
              "en": "Investigation First, Implementation Second",
              "km": "ស៊ើបអង្កេតជាមុន សរសេរកូដជាក្រោយ"
            },
            "subtitle": {
              "en": "Why jumping straight into code generates architectural debt",
              "km": "មូលហេតុដែលការប្រញាប់សរសេរកូដភ្លាមៗបង្កើតឱ្យមានបំណុលស្ថាបត្យកម្ម"
            },
            "href": "#/docs/prompting/19"
          },
          {
            "id": 20,
            "number": 20,
            "slideId": "slide-20",
            "title": {
              "en": "The 8-Point Codebase Inspection Prompt",
              "km": "ក្របខ័ណ្ឌ ៨ ចំណុចសម្រាប់វិភាគ Codebase"
            },
            "subtitle": {
              "en": "A complete framework for auditing an existing implementation",
              "km": "វិធីសាស្ត្រពេញលេញសម្រាប់ធ្វើសវនកម្មលើកូដដែលមានស្រាប់"
            },
            "href": "#/docs/prompting/20"
          },
          {
            "id": 21,
            "number": 21,
            "slideId": "slide-21",
            "title": {
              "en": "Distinguishing Facts from Assumptions",
              "km": "ការបែងចែកការពិតជាក់ស្ដែងពីការសន្និដ្ឋាន"
            },
            "subtitle": {
              "en": "Requiring empirical proof and file citations from the model",
              "km": "ទាមទារភស្តុតាង និងការបញ្ជាក់លេខបន្ទាត់កូដពី AI"
            },
            "href": "#/docs/prompting/21"
          },
          {
            "id": 22,
            "number": 22,
            "slideId": "slide-22",
            "title": {
              "en": "The Professional Engineering Workflow",
              "km": "វដ្តការងារវិស្វកម្មកូដកម្រិតវិជ្ជាជីវៈ"
            },
            "subtitle": {
              "en": "Understand -> Inspect -> Analyze -> Identify Risks -> Plan -> Implement -> Verify",
              "km": "យល់ដឹង -> ពិនិត្យ -> វិភាគ -> កំណត់ហានិភ័យ -> ធ្វើផែនការ -> សរសេរកូដ -> ផ្ទៀងផ្ទាត់"
            },
            "href": "#/docs/prompting/22"
          }
        ]
      },
      {
        "id": "prompting-sec-8",
        "part": "SECTION 08: THINK BEFORE SOLVING",
        "partKey": "",
        "title": {
          "en": "THINK BEFORE SOLVING",
          "km": "THINK BEFORE SOLVING"
        },
        "lessons": [
          {
            "id": 23,
            "number": 23,
            "slideId": "slide-23",
            "title": {
              "en": "Deconstructing Problems Methodically",
              "km": "ការបំបែកបញ្ហាជាលក្ខណៈវិទ្យាសាស្ត្រ"
            },
            "subtitle": {
              "en": "Observation is not causation: Diagnosing before prescribing",
              "km": "អ្វីដែលមើលឃើញមិនមែនជាមូលហេតុពិតប្រាកដជានិច្ចទេ៖ ត្រូវវិភាគមុននឹងព្យាបាល"
            },
            "href": "#/docs/prompting/23"
          },
          {
            "id": 24,
            "number": 24,
            "slideId": "slide-24",
            "title": {
              "en": "The Scientific Method in Software",
              "km": "វិធីសាស្ត្រវិទ្យាសាស្ត្រក្នុង Software"
            },
            "subtitle": {
              "en": "Observation -> Hypothesis -> Experiment -> Verification -> Targeted Fix",
              "km": "ការសង្កេត -> សម្មតិកម្ម -> ការពិសោធន៍ -> ការផ្ទៀងផ្ទាត់ -> ការកែកូដចំគោលដៅ"
            },
            "href": "#/docs/prompting/24"
          },
          {
            "id": 25,
            "number": 25,
            "slideId": "slide-25",
            "title": {
              "en": "Case Study: The Slow Dashboard",
              "km": "ករណីសិក្សាជាក់ស្ដែង៖ វិបត្តិ Dashboard យឺត"
            },
            "subtitle": {
              "en": "Real-world walkthrough from panic to empirical resolution",
              "km": "ដំណើរការដោះស្រាយបញ្ហាពីការភ័យស្លន់ស្លោរហូតដល់លទ្ធផលជាក់ស្ដែង"
            },
            "href": "#/docs/prompting/25"
          }
        ]
      },
      {
        "id": "prompting-sec-9",
        "part": "SECTION 09: LOGICAL THINKING",
        "partKey": "",
        "title": {
          "en": "LOGICAL THINKING",
          "km": "LOGICAL THINKING"
        },
        "lessons": [
          {
            "id": 26,
            "number": 26,
            "slideId": "slide-26",
            "title": {
              "en": "Core Mental Models for Programmers",
              "km": "Mental Models ស្នូលសម្រាប់អ្នកសរសេរកូដ"
            },
            "subtitle": {
              "en": "Deductive reasoning, first principles, and edge-case discovery",
              "km": "ការគិតបែប First Principles, ការទាញហេតុផល និងការស្វែងរក Edge Cases"
            },
            "href": "#/docs/prompting/26"
          },
          {
            "id": 27,
            "number": 27,
            "slideId": "slide-27",
            "title": {
              "en": "Case Analysis: 'Login Fails'",
              "km": "ការវិភាគករណី៖ 'Login មិនចូល'"
            },
            "subtitle": {
              "en": "Mapping multiple potential root causes systematically",
              "km": "ការរៀបចំផែនទីនៃមូលហេតុដើមដែលអាចកើតមានជាប្រព័ន្ធ"
            },
            "href": "#/docs/prompting/27"
          },
          {
            "id": 28,
            "number": 28,
            "slideId": "slide-28",
            "title": {
              "en": "Cognitive Biases When Using AI",
              "km": "Cognitive Biases ពេលប្រើប្រាស់ AI"
            },
            "subtitle": {
              "en": "Guarding against automation bias, anchoring, and confirmation bias",
              "km": "ការការពារខ្លួនពី Automation Bias, Anchoring និង Confirmation Bias"
            },
            "href": "#/docs/prompting/28"
          }
        ]
      },
      {
        "id": "prompting-sec-10",
        "part": "SECTION 10: DECOMPOSE COMPLEX TASKS",
        "partKey": "",
        "title": {
          "en": "DECOMPOSE COMPLEX TASKS",
          "km": "DECOMPOSE COMPLEX TASKS"
        },
        "lessons": [
          {
            "id": 29,
            "number": 29,
            "slideId": "slide-29",
            "title": {
              "en": "The Art of Task Decomposition",
              "km": "សិល្បៈនៃការបំបែកការងារធំៗ (Task Decomposition)"
            },
            "subtitle": {
              "en": "Converting overwhelming monolithic epics into atomic milestones",
              "km": "បំប្លែងគម្រោងធំៗដ៏ស្មុគស្មាញឱ្យទៅជាជំហានតូចៗដែលអាចគ្រប់គ្រងបាន"
            },
            "href": "#/docs/prompting/29"
          },
          {
            "id": 30,
            "number": 30,
            "slideId": "slide-30",
            "title": {
              "en": "Deconstruction Case: Enterprise POS System",
              "km": "ការវិភាគករណី៖ ប្រព័ន្ធលក់ទំនិញ POS ក្នុងផ្សារ"
            },
            "subtitle": {
              "en": "Breaking an 11-module retail system into ordered dependencies",
              "km": "ការបំបែកម៉ូឌុលទាំង ១១ ឱ្យទៅជាលំដាប់លំដោយនៃភាពអាស្រ័យ"
            },
            "href": "#/docs/prompting/30"
          },
          {
            "id": 31,
            "number": 31,
            "slideId": "slide-31",
            "title": {
              "en": "Sub-Task Prompting Workflow",
              "km": "Workflow នៃការបញ្ជាការងាររង (Sub-Tasking)"
            },
            "subtitle": {
              "en": "Maintaining momentum and architectural consistency across sessions",
              "km": "ការរក្សាល្បឿន និងភាពស៊ីសង្វាក់គ្នានៃស្ថាបត្យកម្មឆ្លងកាត់ Session"
            },
            "href": "#/docs/prompting/31"
          }
        ]
      },
      {
        "id": "prompting-sec-11",
        "part": "SECTION 11: PLANNING BEFORE IMPLEMENTATION",
        "partKey": "",
        "title": {
          "en": "PLANNING BEFORE IMPLEMENTATION",
          "km": "PLANNING BEFORE IMPLEMENTATION"
        },
        "lessons": [
          {
            "id": 32,
            "number": 32,
            "slideId": "slide-32",
            "title": {
              "en": "Generating Incremental Implementation Plans",
              "km": "ការបង្កើតផែនការអនុវត្តជាជំហានៗ"
            },
            "subtitle": {
              "en": "Why code execution must be gated behind written architectural approval",
              "km": "មូលហេតុដែលការសរសេរកូដត្រូវតែទាមទារការយល់ព្រមលើផែនការជាមុន"
            },
            "href": "#/docs/prompting/32"
          },
          {
            "id": 33,
            "number": 33,
            "slideId": "slide-33",
            "title": {
              "en": "Anatomy of an Actionable Plan",
              "km": "ទម្រង់នៃផែនការសកម្មភាពដ៏រឹងមាំ"
            },
            "subtitle": {
              "en": "Step, files, dependencies, rollback strategy, and acceptance tests",
              "km": "ជំហាន ឯកសារ ភាពអាស្រ័យ យុទ្ធសាស្ត្រត្រឡប់ក្រោយ និងតេស្តផ្ទៀងផ្ទាត់"
            },
            "href": "#/docs/prompting/33"
          },
          {
            "id": 34,
            "number": 34,
            "slideId": "slide-34",
            "title": {
              "en": "When to Plan vs. When to Code Directly",
              "km": "ពេលណាត្រូវធ្វើផែនការ vs ពេលណាអាចសរសេរកូដភ្លាមៗ"
            },
            "subtitle": {
              "en": "Balancing engineering rigour with rapid development velocity",
              "km": "តុល្យភាពរវាងភាពហ្មត់ចត់នៃវិស្វកម្ម និងល្បឿននៃការអភិវឌ្ឍ"
            },
            "href": "#/docs/prompting/34"
          }
        ]
      },
      {
        "id": "prompting-sec-12",
        "part": "SECTION 12: PROMPTING FOR CODE GENERATION",
        "partKey": "",
        "title": {
          "en": "PROMPTING FOR CODE GENERATION",
          "km": "PROMPTING FOR CODE GENERATION"
        },
        "lessons": [
          {
            "id": 35,
            "number": 35,
            "slideId": "slide-35",
            "title": {
              "en": "Precision Code Generation",
              "km": "ការបង្កើតកូដប្រកបដោយភាពច្បាស់លាស់"
            },
            "subtitle": {
              "en": "Getting clean, production-grade, framework-idiomatic code",
              "km": "ទទួលបានកូដស្អាត កម្រិត Production និងត្រឹមត្រូវតាមទម្រង់ Framework"
            },
            "href": "#/docs/prompting/35"
          },
          {
            "id": 36,
            "number": 36,
            "slideId": "slide-36",
            "title": {
              "en": "Preventing Anti-Patterns & Bloat",
              "km": "ការទប់ស្កាត់ Anti-Patterns និងកូដរញ៉េរញ៉ៃ"
            },
            "subtitle": {
              "en": "Eliminating hallucinated libraries, premature abstractions, and commented noise",
              "km": "លុបបំបាត់ Library ក្លែងក្លាយ ការបង្កើត Abstraction លើសលុប និងខមិនគ្មានប្រយោជន៍"
            },
            "href": "#/docs/prompting/36"
          },
          {
            "id": 37,
            "number": 37,
            "slideId": "slide-37",
            "title": {
              "en": "Complete Working Code Requirement",
              "km": "តម្រូវការកូដពេញលេញដែលដំណើរការបានពិតប្រាកដ"
            },
            "subtitle": {
              "en": "Banning placeholders, ellipses, and unhelpful TODOs",
              "km": "ហាមដាច់ខាតការប្រើ Placeholder, សញ្ញាចុចៗ (...) និង TODO"
            },
            "href": "#/docs/prompting/37"
          }
        ]
      },
      {
        "id": "prompting-sec-13",
        "part": "SECTION 13: PROMPTING FOR UI DESIGN",
        "partKey": "",
        "title": {
          "en": "PROMPTING FOR UI DESIGN",
          "km": "PROMPTING FOR UI DESIGN"
        },
        "lessons": [
          {
            "id": 38,
            "number": 38,
            "slideId": "slide-38",
            "title": {
              "en": "UI Reproduction vs. Arbitrary Redesign",
              "km": "ការចម្លង UI ឱ្យដូចបេះបិទ vs ការកែច្នៃតាមចិត្ត"
            },
            "subtitle": {
              "en": "Guiding AI to match existing design systems with pixel precision",
              "km": "ដឹកនាំ AI ឱ្យគោរពតាម Design System ដែលមានស្រាប់ជាមួយភាពជាក់លាក់ខ្ពស់"
            },
            "href": "#/docs/prompting/38"
          },
          {
            "id": 39,
            "number": 39,
            "slideId": "slide-39",
            "title": {
              "en": "Component-Driven Prompting",
              "km": "ការបញ្ជាកូដ UI តាមបែប Component-Driven"
            },
            "subtitle": {
              "en": "Building reusable, accessible, and responsive UI components",
              "km": "ការបង្កើត Component ដែលអាចប្រើឡើងវិញបាន Accessible និង Responsive"
            },
            "href": "#/docs/prompting/39"
          },
          {
            "id": 40,
            "number": 40,
            "slideId": "slide-40",
            "title": {
              "en": "The 4 Levels of UI Requests",
              "km": "កម្រិតទាំង ៤ នៃការបញ្ជាកូដ UI"
            },
            "subtitle": {
              "en": "Inspiration vs. Pixel Clone vs. Incremental Polish vs. Total Redesign",
              "km": "ការស្វែងរកគំនិត vs ការចម្លងតាមគំរូ vs ការកែសម្រួលបន្តិចបន្តួច vs ការរចនាឡើងវិញទាំងស្រុង"
            },
            "href": "#/docs/prompting/40"
          }
        ]
      },
      {
        "id": "prompting-sec-14",
        "part": "SECTION 14: DEBUGGING WITH AI",
        "partKey": "",
        "title": {
          "en": "DEBUGGING WITH AI",
          "km": "DEBUGGING WITH AI"
        },
        "lessons": [
          {
            "id": 41,
            "number": 41,
            "slideId": "slide-41",
            "title": {
              "en": "Structured Debugging Protocols",
              "km": "ពិធីសារដោះស្រាយ Bug ជាប្រព័ន្ធ (Structured Debugging)"
            },
            "subtitle": {
              "en": "Extracting root causes instead of playing whack-a-mole with symptoms",
              "km": "ស្វែងរកមូលហេតុដើមជាជាងការរត់ដេញតាមរោគសញ្ញាខាងក្រៅ"
            },
            "href": "#/docs/prompting/41"
          },
          {
            "id": 42,
            "number": 42,
            "slideId": "slide-42",
            "title": {
              "en": "The 8-Step Debugging Cycle",
              "km": "វដ្តនៃការដោះស្រាយ Bug ៨ ជំហាន"
            },
            "subtitle": {
              "en": "Observe -> Reproduce -> Collect Evidence -> Hypothesize -> Test -> Fix -> Regression Test -> Document",
              "km": "សង្កេត -> បង្កើតឡើងវិញ -> ប្រមូលភស្តុតាង -> ដាក់សម្មតិកម្ម -> តេស្ត -> កែកូដ -> Regression Test -> កត់ត្រា"
            },
            "href": "#/docs/prompting/42"
          },
          {
            "id": 43,
            "number": 43,
            "slideId": "slide-43",
            "title": {
              "en": "Investigating Ephemeral & Race Condition Bugs",
              "km": "ការស៊ើបអង្កេត Bug ពិបាកៗ (Race Conditions)"
            },
            "subtitle": {
              "en": "Handling asynchronous timing, database deadlocks, and memory leaks",
              "km": "ការដោះស្រាយបញ្ហា Asynchronous Timing, Database Deadlocks និង Memory Leaks"
            },
            "href": "#/docs/prompting/43"
          }
        ]
      },
      {
        "id": "prompting-sec-15",
        "part": "SECTION 15: PROMPTING FOR SECURITY AUDITS",
        "partKey": "",
        "title": {
          "en": "PROMPTING FOR SECURITY AUDITS",
          "km": "PROMPTING FOR SECURITY AUDITS"
        },
        "lessons": [
          {
            "id": 44,
            "number": 44,
            "slideId": "slide-44",
            "title": {
              "en": "Evidence-Based Security Reviews",
              "km": "សវនកម្មសុវត្ថិភាពផ្អែកលើភស្តុតាងជាក់ស្ដែង"
            },
            "subtitle": {
              "en": "Turning models into ruthless code auditors without destructive actions",
              "km": "បង្វឹក AI ឱ្យក្លាយជាអ្នកត្រួតពិនិត្យសុវត្ថិភាពកូដដ៏ហ្មត់ចត់ដោយគ្មានសកម្មភាពបំផ្លាញ"
            },
            "href": "#/docs/prompting/44"
          },
          {
            "id": 45,
            "number": 45,
            "slideId": "slide-45",
            "title": {
              "en": "Standard Security Finding Format",
              "km": "ទម្រង់ស្ដង់ដារនៃរបាយការណ៍សុវត្ថិភាព"
            },
            "subtitle": {
              "en": "Severity, Affected Path, Vulnerability, Exploit Scenario, Remediation, Verification",
              "km": "កម្រិតគ្រោះថ្នាក់, File & Line, ភាពងាយរងគ្រោះ, សេណារីយ៉ូនៃការវាយប្រហារ, ដំណោះស្រាយ, ការផ្ទៀងផ្ទាត់"
            },
            "href": "#/docs/prompting/45"
          },
          {
            "id": 46,
            "number": 46,
            "slideId": "slide-46",
            "title": {
              "en": "Multi-Tenant & Secret Isolation",
              "km": "ការញែកទិន្នន័យ Multi-Tenant & ការការពារ Secret"
            },
            "subtitle": {
              "en": "Guarding against data leaks, exposed tokens, and IDOR vulnerabilities",
              "km": "ទប់ស្កាត់ការលេចធ្លាយទិន្នន័យ Token សម្ងាត់ និងចន្លោះប្រហោង IDOR"
            },
            "href": "#/docs/prompting/46"
          }
        ]
      },
      {
        "id": "prompting-sec-16",
        "part": "SECTION 16: PROMPTING FOR CODE REVIEW",
        "partKey": "",
        "title": {
          "en": "PROMPTING FOR CODE REVIEW",
          "km": "PROMPTING FOR CODE REVIEW"
        },
        "lessons": [
          {
            "id": 47,
            "number": 47,
            "slideId": "slide-47",
            "title": {
              "en": "The Production Code Reviewer Persona",
              "km": "តួនាទីជាអ្នកត្រួតពិនិត្យកូដ Production (Code Reviewer)"
            },
            "subtitle": {
              "en": "Reviewing for correctness, safety, and performance rather than stylistic bike-shedding",
              "km": "ពិនិត្យមើលភាពត្រឹមត្រូវ សុវត្ថិភាព និងប្រសិទ្ធភាព ជាជាងការប្រកែកគ្នាពីរចនាប័ទ្មអក្សរ"
            },
            "href": "#/docs/prompting/47"
          },
          {
            "id": 48,
            "number": 48,
            "slideId": "slide-48",
            "title": {
              "en": "Reviewing Diffs Effectively",
              "km": "ការពិនិត្យមើល Git Diff ប្រកបដោយប្រសិទ្ធភាព"
            },
            "subtitle": {
              "en": "Feeding Git diffs to AI for surgical pre-commit audits",
              "km": "ការបញ្ជូន Git Diff ទៅកាន់ AI ដើម្បីធ្វើសវនកម្មមុនពេល Commit"
            },
            "href": "#/docs/prompting/48"
          },
          {
            "id": 49,
            "number": 49,
            "slideId": "slide-49",
            "title": {
              "en": "Code Review vs. Code Rewriting",
              "km": "ការត្រួតពិនិត្យកូដ (Code Review) vs ការសរសេរកូដឡើងវិញ"
            },
            "subtitle": {
              "en": "Preserving project architecture and preventing unauthorized refactoring",
              "km": "ការគោរពស្ថាបត្យកម្មចាស់ និងការការពារការផ្លាស់ប្តូរដោយគ្មានការអនុញ្ញាត"
            },
            "href": "#/docs/prompting/49"
          }
        ]
      },
      {
        "id": "prompting-sec-17",
        "part": "SECTION 17: PROMPTING FOR DATABASE CHANGES",
        "partKey": "",
        "title": {
          "en": "PROMPTING FOR DATABASE CHANGES",
          "km": "PROMPTING FOR DATABASE CHANGES"
        },
        "lessons": [
          {
            "id": 50,
            "number": 50,
            "slideId": "slide-50",
            "title": {
              "en": "Database Migrations & Data Safety",
              "km": "ការផ្លាស់ប្តូរ Database & សុវត្ថិភាពទិន្នន័យ"
            },
            "subtitle": {
              "en": "Protecting schemas, tables, and production data from reckless alterations",
              "km": "ការពារ Schema, Table និងទិន្នន័យលើ Production ពីការកែប្រែដោយប្រហែស"
            },
            "href": "#/docs/prompting/50"
          },
          {
            "id": 51,
            "number": 51,
            "slideId": "slide-51",
            "title": {
              "en": "PostgreSQL & Neon Specific Considerations",
              "km": "ការគិតគូរលើ PostgreSQL និង Neon"
            },
            "subtitle": {
              "en": "Connection pooling, serverless branching, and index optimization",
              "km": "Connection Pooling, Serverless Branching និងការបង្កើនល្បឿន Index"
            },
            "href": "#/docs/prompting/51"
          },
          {
            "id": 52,
            "number": 52,
            "slideId": "slide-52",
            "title": {
              "en": "Data Loss Prevention Checklist",
              "km": "បញ្ជីត្រួតពិនិត្យការពារការបាត់បង់ទិន្នន័យ"
            },
            "subtitle": {
              "en": "Flagging DROP, TRUNCATE, ALTER TYPE, and table rewrite hazards",
              "km": "ការដាក់ទង់ព្រមានលើ DROP, TRUNCATE, ALTER TYPE និងការសរសេរតារាងឡើងវិញ"
            },
            "href": "#/docs/prompting/52"
          }
        ]
      },
      {
        "id": "prompting-sec-18",
        "part": "SECTION 18: USING AI CODING AGENTS",
        "partKey": "",
        "title": {
          "en": "USING AI CODING AGENTS",
          "km": "USING AI CODING AGENTS"
        },
        "lessons": [
          {
            "id": 53,
            "number": 53,
            "slideId": "slide-53",
            "title": {
              "en": "From Chatbots to Autonomous Coding Agents",
              "km": "ពី Chatbots ទៅកាន់ Autonomous Coding Agents"
            },
            "subtitle": {
              "en": "Understanding IDE assistants, repo-aware CLI tools, and background agents",
              "km": "ការយល់ដឹងពី IDE Assistants, CLI Tools ដែលស្គាល់ Repo និង Background Agents"
            },
            "href": "#/docs/prompting/53"
          },
          {
            "id": 54,
            "number": 54,
            "slideId": "slide-54",
            "title": {
              "en": "Agent Capabilities & Permission Boundaries",
              "km": "សមត្ថភាពរបស់ Agent & ព្រំដែននៃការអនុញ្ញាត (Permissions)"
            },
            "subtitle": {
              "en": "Granting enough power to solve tasks while preventing catastrophic errors",
              "km": "ការផ្តល់អំណាចគ្រប់គ្រាន់ដើម្បីដោះស្រាយការងារ ដោយការពារកុំឱ្យមានកំហុសមហន្តរាយ"
            },
            "href": "#/docs/prompting/54"
          },
          {
            "id": 55,
            "number": 55,
            "slideId": "slide-55",
            "title": {
              "en": "Guiding Agents with Context Files",
              "km": "ការដឹកនាំ Agent តាមរយៈ Context Files (AGENTS.md)"
            },
            "subtitle": {
              "en": "Using AGENTS.md, rules, and customization skills to govern behavior",
              "km": "ការប្រើប្រាស់ឯកសារច្បាប់ និង Skills ដើម្បីគ្រប់គ្រងឥរិយាបថរបស់ AI"
            },
            "href": "#/docs/prompting/55"
          }
        ]
      },
      {
        "id": "prompting-sec-19",
        "part": "SECTION 19: SAFE AGENT WORKFLOW",
        "partKey": "",
        "title": {
          "en": "SAFE AGENT WORKFLOW",
          "km": "SAFE AGENT WORKFLOW"
        },
        "lessons": [
          {
            "id": 56,
            "number": 56,
            "slideId": "slide-56",
            "title": {
              "en": "The 10-Step Safe Agent Protocol",
              "km": "ពិធីសារសុវត្ថិភាព ១០ ជំហានសម្រាប់ AI Agent"
            },
            "subtitle": {
              "en": "A bulletproof engineering lifecycle for repository-level AI automation",
              "km": "វដ្តជីវិតវិស្វកម្មដ៏រឹងមាំសម្រាប់ដំណើរការស្វ័យប្រវត្តិកម្មកូដក្នុង Repository"
            },
            "href": "#/docs/prompting/56"
          },
          {
            "id": 57,
            "number": 57,
            "slideId": "slide-57",
            "title": {
              "en": "Git as Your Safety Shield",
              "km": "ការប្រើប្រាស់ Git ជាខែលការពារសុវត្ថិភាព"
            },
            "subtitle": {
              "en": "Feature branches, clean commits, and the sacred rule of unstaged changes",
              "km": "Feature Branches, Clean Commits និងច្បាប់រក្សាការផ្លាស់ប្តូរឱ្យស្ថិតក្នុងស្ថានភាព Unstaged"
            },
            "href": "#/docs/prompting/57"
          },
          {
            "id": 58,
            "number": 58,
            "slideId": "slide-58",
            "title": {
              "en": "Red Lines for AI Agents",
              "km": "ខ្សែបន្ទាត់ក្រហមសម្រាប់ AI Agents"
            },
            "subtitle": {
              "en": "Operations that must ALWAYS require explicit human authorization",
              "km": "ប្រតិបត្តិការគ្រោះថ្នាក់ដែលត្រូវតែទាមទារការអនុញ្ញាតដោយផ្ទាល់ពីមនុស្សជានិច្ច"
            },
            "href": "#/docs/prompting/58"
          }
        ]
      },
      {
        "id": "prompting-sec-20",
        "part": "SECTION 20: THINKING ABOUT TRADEOFFS",
        "partKey": "",
        "title": {
          "en": "THINKING ABOUT TRADEOFFS",
          "km": "THINKING ABOUT TRADEOFFS"
        },
        "lessons": [
          {
            "id": 59,
            "number": 59,
            "slideId": "slide-59",
            "title": {
              "en": "Technical Decisions Have No Free Lunches",
              "km": "ការសម្រេចចិត្តបច្ចេកទេសគ្មានអ្វីដែលល្អឥតខ្ចោះគ្រប់យ៉ាងទេ"
            },
            "subtitle": {
              "en": "Forcing AI to analyze trade-offs instead of peddling one-size-fits-all hype",
              "km": "បង្ខំ AI ឱ្យវិភាគពីគុណសម្បត្តិ និងគុណវិបត្តិ ជាជាងការលើកសរសើរតែមួយមុខ"
            },
            "href": "#/docs/prompting/59"
          },
          {
            "id": 60,
            "number": 60,
            "slideId": "slide-60",
            "title": {
              "en": "Classical Software Dilemmas",
              "km": "វិបត្តិសម្រេចចិត្តបុរាណក្នុង Software"
            },
            "subtitle": {
              "en": "Evaluating real engineering trade-offs with AI assistance",
              "km": "ការវាយតម្លៃលើការដោះដូរបច្ចេកទេសជាក់ស្ដែងជាមួយជំនួយការ AI"
            },
            "href": "#/docs/prompting/60"
          }
        ]
      },
      {
        "id": "prompting-sec-21",
        "part": "SECTION 21: HOW TO VERIFY AI ANSWERS",
        "partKey": "",
        "title": {
          "en": "HOW TO VERIFY AI ANSWERS",
          "km": "HOW TO VERIFY AI ANSWERS"
        },
        "lessons": [
          {
            "id": 61,
            "number": 61,
            "slideId": "slide-61",
            "title": {
              "en": "The Verification Playbook",
              "km": "សៀវភៅណែនាំផ្ទៀងផ្ទាត់កូដ (Verification Playbook)"
            },
            "subtitle": {
              "en": "10 empirical techniques to confirm code correctness independently",
              "km": "បច្ចេកទេសជាក់ស្ដែងទាំង ១០ ដើម្បីបញ្ជាក់ពីភាពត្រឹមត្រូវនៃកូដដោយឯករាជ្យ"
            },
            "href": "#/docs/prompting/61"
          },
          {
            "id": 62,
            "number": 62,
            "slideId": "slide-62",
            "title": {
              "en": "Eloquence Is Not Evidence",
              "km": "ភាពរលូននៃពាក្យសម្តីមិនមែនជាភស្តុតាងទេ"
            },
            "subtitle": {
              "en": "Overcoming the psychological trap of polished AI rhetoric",
              "km": "យកឈ្នះលើអន្ទាក់ផ្លូវចិត្តនៃវោហារសាស្ត្រដ៏ពិរោះរបស់ AI"
            },
            "href": "#/docs/prompting/62"
          }
        ]
      },
      {
        "id": "prompting-sec-22",
        "part": "SECTION 22: HANDLING UNCERTAINTY",
        "partKey": "",
        "title": {
          "en": "HANDLING UNCERTAINTY",
          "km": "HANDLING UNCERTAINTY"
        },
        "lessons": [
          {
            "id": 63,
            "number": 63,
            "slideId": "slide-63",
            "title": {
              "en": "Forcing AI to Declare Uncertainty",
              "km": "ការបង្ខំឱ្យ AI បញ្ជាក់ពីភាពមិនច្បាស់លាស់"
            },
            "subtitle": {
              "en": "Preventing confident guesses when data is incomplete or ambiguous",
              "km": "ទប់ស្កាត់ការទាយដោយទំនុកចិត្តនៅពេលដែលទិន្នន័យមិនពេញលេញ ឬស្រពិចស្រពិល"
            },
            "href": "#/docs/prompting/63"
          },
          {
            "id": 64,
            "number": 64,
            "slideId": "slide-64",
            "title": {
              "en": "Navigating Evolving Library Ecosystems",
              "km": "ការដោះស្រាយបញ្ហាការផ្លាស់ប្តូរ Version នៃ Library"
            },
            "subtitle": {
              "en": "Handling breaking version changes and training data cutoffs",
              "km": "ការដោះស្រាយបញ្ហា Breaking Changes និងកាលបរិច្ឆេទកំណត់នៃទិន្នន័យ AI"
            },
            "href": "#/docs/prompting/64"
          }
        ]
      },
      {
        "id": "prompting-sec-23",
        "part": "SECTION 23: COMMON PROMPTING MISTAKES",
        "partKey": "",
        "title": {
          "en": "COMMON PROMPTING MISTAKES",
          "km": "COMMON PROMPTING MISTAKES"
        },
        "lessons": [
          {
            "id": 65,
            "number": 65,
            "slideId": "slide-65",
            "title": {
              "en": "The 10 Deadly Prompting Sins (Part 1)",
              "km": "កំហុសឆ្គងធំៗទាំង ១០ ក្នុងការសរសេរ Prompt (ភាគ ១)"
            },
            "subtitle": {
              "en": "Recognizing and correcting destructive communication anti-patterns",
              "km": "ការស្វែងយល់ និងកែតម្រូវទម្លាប់ទំនាក់ទំនងមិនល្អជាមួយ AI"
            },
            "href": "#/docs/prompting/65"
          },
          {
            "id": 66,
            "number": 66,
            "slideId": "slide-66",
            "title": {
              "en": "The 10 Deadly Prompting Sins (Part 2)",
              "km": "កំហុសឆ្គងធំៗទាំង ១០ ក្នុងការសរសេរ Prompt (ភាគ ២)"
            },
            "subtitle": {
              "en": "Preventing scope creep, missing constraints, and blind faith",
              "km": "ការទប់ស្កាត់ Scope Creep ការខ្វះលក្ខខណ្ឌកំណត់ និងការជឿជាក់ដោយងងឹតងងល់"
            },
            "href": "#/docs/prompting/66"
          },
          {
            "id": 67,
            "number": 67,
            "slideId": "slide-67",
            "title": {
              "en": "The 10 Deadly Prompting Sins (Part 3)",
              "km": "កំហុសឆ្គងធំៗទាំង ១០ ក្នុងការសរសេរ Prompt (ភាគ ៣)"
            },
            "subtitle": {
              "en": "Fixing symptom-chasing and runaway file churn",
              "km": "ការកែតម្រូវការដេញតាមរោគសញ្ញា និងការកែសម្រួល File ដោយគ្មានទិសដៅ"
            },
            "href": "#/docs/prompting/67"
          }
        ]
      },
      {
        "id": "prompting-sec-24",
        "part": "SECTION 24: PROMPT ITERATION",
        "partKey": "",
        "title": {
          "en": "PROMPT ITERATION",
          "km": "PROMPT ITERATION"
        },
        "lessons": [
          {
            "id": 68,
            "number": 68,
            "slideId": "slide-68",
            "title": {
              "en": "The Prompt Refinement Loop",
              "km": "វដ្តនៃការកែលម្អ Prompt (Refinement Loop)"
            },
            "subtitle": {
              "en": "Iterative precision: Honing answers across sequential turns",
              "km": "ភាពសុក្រឹតតាមរយៈការសន្ទនាបន្តបន្ទាប់គ្នាក្នុង Session"
            },
            "href": "#/docs/prompting/68"
          },
          {
            "id": 69,
            "number": 69,
            "slideId": "slide-69",
            "title": {
              "en": "A 3-Step Iteration Walkthrough",
              "km": "ការបង្ហាញការកែលម្អ ៣ ជំហានជាក់ស្ដែង"
            },
            "subtitle": {
              "en": "Transforming a mediocre draft into a rock-solid production module",
              "km": "បំប្លែងកូដព្រាងធម្មតាឱ្យទៅជាម៉ូឌុលកម្រិត Production ដ៏រឹងមាំ"
            },
            "href": "#/docs/prompting/69"
          }
        ]
      },
      {
        "id": "prompting-sec-25",
        "part": "SECTION 25: REAL-WORLD PROJECT: TASKFLOW",
        "partKey": "",
        "title": {
          "en": "REAL-WORLD PROJECT: TASKFLOW",
          "km": "REAL-WORLD PROJECT: TASKFLOW"
        },
        "lessons": [
          {
            "id": 70,
            "number": 70,
            "slideId": "slide-70",
            "title": {
              "en": "Case Study: TaskFlow SaaS Platform",
              "km": "ករណីសិក្សាគម្រោងជាក់ស្ដែង៖ TaskFlow SaaS"
            },
            "subtitle": {
              "en": "Applying AI collaboration to a complete Next.js & Neon application",
              "km": "ការអនុវត្តកិច្ចសហការជាមួយ AI លើកម្មវិធី Next.js និង Neon ពេញលេញមួយ"
            },
            "href": "#/docs/prompting/70"
          },
          {
            "id": 71,
            "number": 71,
            "slideId": "slide-71",
            "title": {
              "en": "TaskFlow Phase Breakdown: What to Prompt",
              "km": "ការបំបែកដំណាក់កាល TaskFlow៖ អ្វីដែលត្រូវ Prompt"
            },
            "subtitle": {
              "en": "Exact prompts for each phase of the project lifecycle",
              "km": "Prompt ជាក់លាក់សម្រាប់ដំណាក់កាលនីមួយៗនៃវដ្តជីវិតគម្រោង"
            },
            "href": "#/docs/prompting/71"
          }
        ]
      },
      {
        "id": "prompting-sec-26",
        "part": "SECTION 26: PRACTICAL PROMPT LIBRARY",
        "partKey": "",
        "title": {
          "en": "PRACTICAL PROMPT LIBRARY",
          "km": "PRACTICAL PROMPT LIBRARY"
        },
        "lessons": [
          {
            "id": 72,
            "number": 72,
            "slideId": "slide-72",
            "title": {
              "en": "Production-Grade Reusable Prompt Templates",
              "km": "បណ្ណាល័យគំរូ Prompt កម្រិត Production"
            },
            "subtitle": {
              "en": "Battle-tested templates with copy-to-clipboard functionality",
              "km": "គំរូ Prompt ដែលបានឆ្លងកាត់ការសាកល្បងជាក់ស្ដែង រួមជាមួយប៊ូតុងចម្លងភ្លាមៗ"
            },
            "href": "#/docs/prompting/72"
          }
        ]
      },
      {
        "id": "prompting-sec-27",
        "part": "SECTION 27: INTERACTIVE PROMPT BUILDER",
        "partKey": "",
        "title": {
          "en": "INTERACTIVE PROMPT BUILDER",
          "km": "INTERACTIVE PROMPT BUILDER"
        },
        "lessons": [
          {
            "id": 73,
            "number": 73,
            "slideId": "slide-73",
            "title": {
              "en": "Interactive Universal Prompt Workshop",
              "km": "រោងជាងបង្កើត Prompt អន្តរកម្ម (Interactive Workshop)"
            },
            "subtitle": {
              "en": "Assemble structured, high-precision prompts with real-time feedback",
              "km": "ផ្គុំ Prompt ដែលមានរចនាសម្ព័ន្ធ និងភាពសុក្រឹតខ្ពស់ជាមួយការឆ្លើយតបភ្លាមៗ"
            },
            "href": "#/docs/prompting/73"
          }
        ]
      },
      {
        "id": "prompting-sec-28",
        "part": "SECTION 28: INTERACTIVE ANALYSIS WORKSHOP",
        "partKey": "",
        "title": {
          "en": "INTERACTIVE ANALYSIS WORKSHOP",
          "km": "INTERACTIVE ANALYSIS WORKSHOP"
        },
        "lessons": [
          {
            "id": 74,
            "number": 74,
            "slideId": "slide-74",
            "title": {
              "en": "Interactive Scenario & Troubleshooting Exercises",
              "km": "លំហាត់អនុវត្តដោះស្រាយបញ្ហាក្នុងសេណារីយ៉ូជាក់ស្ដែង"
            },
            "subtitle": {
              "en": "Test your engineering intuition on real-world production incidents",
              "km": "សាកល្បងវិចារណញ្ញាណវិស្វកម្មរបស់អ្នកលើឧប្បត្តិហេតុ Production ជាក់ស្ដែង"
            },
            "href": "#/docs/prompting/74"
          }
        ]
      },
      {
        "id": "prompting-sec-29",
        "part": "SECTION 29: FINAL CHEAT SHEET",
        "partKey": "",
        "title": {
          "en": "FINAL CHEAT SHEET",
          "km": "FINAL CHEAT SHEET"
        },
        "lessons": [
          {
            "id": 75,
            "number": 75,
            "slideId": "slide-75",
            "title": {
              "en": "The Master Engineering Workflow & Architecture",
              "km": "ស្ថាបត្យកម្ម និងចង្វាក់ការងារវិស្វកម្មមេ"
            },
            "subtitle": {
              "en": "Understand -> Analyze -> Plan -> Implement -> Test -> Review -> Verify -> Deliver",
              "km": "យល់ដឹង -> វិភាគ -> ធ្វើផែនការ -> សរសេរកូដ -> តេស្ត -> ពិនិត្យ -> ផ្ទៀងផ្ទាត់ -> ប្រគល់ការងារ"
            },
            "href": "#/docs/prompting/75"
          }
        ]
      }
    ]
  }
];

export function getCourseById(courseId) {
  return DOCS_NAVIGATION.find((c) => c.id === courseId) || null;
}

export function getAllLessonsFlat(courseId) {
  const course = getCourseById(courseId);
  if (!course) return [];
  const flat = [];
  course.sections.forEach((sec) => {
    sec.lessons.forEach((l) => {
      flat.push({ ...l, section: sec, course });
    });
  });
  return flat;
}

export function getLessonByRoute(courseId, lessonNum) {
  const num = parseInt(lessonNum, 10) || 1;
  const course = getCourseById(courseId);
  if (!course) return null;

  const flatLessons = getAllLessonsFlat(courseId);
  const currentIndex = flatLessons.findIndex((l) => l.number === num);
  const activeLesson = currentIndex !== -1 ? flatLessons[currentIndex] : flatLessons[0];
  if (!activeLesson) return null;

  const prevLesson = currentIndex > 0 ? flatLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < flatLessons.length - 1 ? flatLessons[currentIndex + 1] : null;

  return {
    course,
    section: activeLesson.section,
    lesson: activeLesson,
    prevLesson,
    nextLesson,
    currentIndex: currentIndex !== -1 ? currentIndex : 0,
    totalLessons: flatLessons.length,
  };
}

export const SEARCH_INDEX = DOCS_NAVIGATION.flatMap((course) =>
  course.sections.flatMap((sec) =>
    sec.lessons.map((lesson) => ({
      courseId: course.id,
      courseTitle: course.title,
      module: course.module,
      accent: course.accent,
      icon: course.icon,
      sectionTitle: sec.title,
      number: lesson.number,
      title: lesson.title,
      subtitle: lesson.subtitle,
      href: lesson.href,
    }))
  )
);
