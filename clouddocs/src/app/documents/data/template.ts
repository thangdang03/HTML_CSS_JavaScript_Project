import business from '@Documents/_assets/business-letter.svg';
import software from '@Documents/_assets/software-proposal.svg';     
import cover from '@Documents/_assets/cover-letter.svg';     
import letter from '@Documents/_assets/letter.svg';     
import project from '@Documents/_assets/project-proposal.svg';     
import resume from '@Documents/_assets/resume.svg';     
import blackDocument from '@Documents/_assets/blank-document.svg';     

export const templates = [
  {
    "name": "Black document",
    "content": " ",
    "svg": blackDocument
  },
  {
    "name": "Blog Post",
    "content": {
      "type": "doc",
      "content": [
        {
          "type": "heading",
          "attrs": { "level": 1 },
          "content": [{ "type": "text", "text": "Tiêu đề bài viết" }]
        },
        {
          "type": "paragraph",
          "content": [
            {
              "type": "text",
              "text": "Đây là đoạn mở đầu của bài viết. Hãy giới thiệu chủ đề của bạn một cách hấp dẫn."
            }
          ]
        },
        {
          "type": "paragraph",
          "content": [
            { "type": "text", "text": "Thêm nội dung chi tiết ở đây..." }
          ]
        }
      ]
    },
    "svg": business
  },
  {
    "name": "Meeting Notes",
    "content": {
      "type": "doc",
      "content": [
        {
          "type": "heading",
          "attrs": { "level": 1 },
          "content": [{ "type": "text", "text": "Ghi chú cuộc họp" }]
        },
        {
          "type": "heading",
          "attrs": { "level": 2 },
          "content": [{ "type": "text", "text": "Mục tiêu cuộc họp" }]
        },
        {
          "type": "paragraph",
          "content": [
            { "type": "text", "text": "Mô tả mục tiêu chính của cuộc họp." }
          ]
        },
        {
          "type": "heading",
          "attrs": { "level": 2 },
          "content": [{ "type": "text", "text": "Danh sách công việc" }]
        },
        {
          "type": "bulletList",
          "content": [
            {
              "type": "listItem",
              "content": [
                {
                  "type": "paragraph",
                  "content": [{ "type": "text", "text": "Công việc 1" }]
                }
              ]
            },
            {
              "type": "listItem",
              "content": [
                {
                  "type": "paragraph",
                  "content": [{ "type": "text", "text": "Công việc 2" }]
                }
              ]
            }
          ]
        }
      ]
    },
    "svg": software
  },
  {
    "name": "Technical Document",
    "content": {
      "type": "doc",
      "content": [
        {
          "type": "heading",
          "attrs": { "level": 1 },
          "content": [{ "type": "text", "text": "Tài liệu kỹ thuật" }]
        },
        {
          "type": "paragraph",
          "content": [
            { "type": "text", "text": "Mô tả tổng quan về tài liệu kỹ thuật." }
          ]
        },
        {
          "type": "codeBlock",
          "content": [
            { "type": "text", "text": "// Viết code mẫu ở đây\nconsole.log('Hello, World!');" }
          ]
        }
      ]
    },
    "svg": cover
  },
  {
    "name": "CV",
    "content": {
      "type": "doc",
      "content": [
        {
          "type": "heading",
          "attrs": { "level": 1 },
          "content": [{ "type": "text", "text": "Hồ sơ cá nhân" }]
        },
        {
          "type": "heading",
          "attrs": { "level": 2 },
          "content": [{ "type": "text", "text": "Thông tin cá nhân" }]
        },
        {
          "type": "paragraph",
          "content": [
            { "type": "text", "text": "Họ tên: [Your name]" },
            { "type": "hardBreak" },
            { "type": "text", "text": "Email: [Your email]" },
            { "type": "hardBreak" },
            { "type": "text", "text": "Số điện thoại: [Your phone]" }
          ]
        },
        {
          "type": "heading",
          "attrs": { "level": 2 },
          "content": [{ "type": "text", "text": "Kinh nghiệm làm việc" }]
        },
        {
          "type": "bulletList",
          "content": [
            {
              "type": "listItem",
              "content": [
                {
                  "type": "paragraph",
                  "content": [
                    { "type": "text", "text": "[Vị trí] tại [Công ty], [Thời gian]" },
                    { "type": "hardBreak" },
                    { "type": "text", "text": "- Mô tả công việc..." }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "heading",
          "attrs": { "level": 2 },
          "content": [{ "type": "text", "text": "Học vấn" }]
        },
        {
          "type": "paragraph",
          "content": [
            { "type": "text", "text": "[Bằng cấp] tại [Trường], [Thời gian]" }
          ]
        },
        {
          "type": "heading",
          "attrs": { "level": 2 },
          "content": [{ "type": "text", "text": "Kỹ năng" }]
        },
        {
          "type": "bulletList",
          "content": [
            {
              "type": "listItem",
              "content": [
                { "type": "paragraph", "content": [{ "type": "text", "text": "Kỹ năng 1" }] }
              ]
            },
            {
              "type": "listItem",
              "content": [
                { "type": "paragraph", "content": [{ "type": "text", "text": "Kỹ năng 2" }] }
              ]
            }
          ]
        }
      ]
    },
    "svg": resume
  },
  {
    "name": "Presentation",
    "content": {
      "type": "doc",
      "content": [
        {
          "type": "heading",
          "attrs": { "level": 1 },
          "content": [{ "type": "text", "text": "Tiêu đề bản thuyết trình" }]
        },
        {
          "type": "heading",
          "attrs": { "level": 2 },
          "content": [{ "type": "text", "text": "Slide 1: Giới thiệu" }]
        },
        {
          "type": "paragraph",
          "content": [
            { "type": "text", "text": "Mô tả ngắn gọn về chủ đề thuyết trình." }
          ]
        },
        {
          "type": "bulletList",
          "content": [
            {
              "type": "listItem",
              "content": [
                { "type": "paragraph", "content": [{ "type": "text", "text": "Điểm nhấn 1" }] }
              ]
            },
            {
              "type": "listItem",
              "content": [
                { "type": "paragraph", "content": [{ "type": "text", "text": "Điểm nhấn 2" }] }
              ]
            }
          ]
        },
        {
          "type": "heading",
          "attrs": { "level": 2 },
          "content": [{ "type": "text", "text": "Slide 2: Nội dung chính" }]
        },
        {
          "type": "paragraph",
          "content": [
            { "type": "text", "text": "Thêm chi tiết ở đây..." }
          ]
        }
      ]
    },
    "svg": project
  },
  {
    "name": "Proposal",
    "content": {
      "type": "doc",
      "content": [
        {
          "type": "heading",
          "attrs": { "level": 1 },
          "content": [{ "type": "text", "text": "Đề xuất dự án" }]
        },
        {
          "type": "heading",
          "attrs": { "level": 2 },
          "content": [{ "type": "text", "text": "Mục tiêu dự án" }]
        },
        {
          "type": "paragraph",
          "content": [
            { "type": "text", "text": "Mô tả mục tiêu chính của dự án." }
          ]
        },
        {
          "type": "heading",
          "attrs": { "level": 2 },
          "content": [{ "type": "text", "text": "Phạm vi công việc" }]
        },
        {
          "type": "bulletList",
          "content": [
            {
              "type": "listItem",
              "content": [
                { "type": "paragraph", "content": [{ "type": "text", "text": "Nhiệm vụ 1" }] }
              ]
            },
            {
              "type": "listItem",
              "content": [
                { "type": "paragraph", "content": [{ "type": "text", "text": "Nhiệm vụ 2" }] }
              ]
            }
          ]
        },
        {
          "type": "heading",
          "attrs": { "level": 2 },
          "content": [{ "type": "text", "text": "Kế hoạch thực hiện" }]
        },
        {
          "type": "paragraph",
          "content": [
            { "type": "text", "text": "Mô tả các bước thực hiện dự án..." }
          ]
        }
      ]
    },
    "svg": letter
  }
]