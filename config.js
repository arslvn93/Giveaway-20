const config = {
  "modalQuestions": [
    {
      "id": "community_events_attendance",
      "questionText": "How often do you attend local sports events like baseball games?",
      "options": [
        { "value": "rarely", "text": "Rarely" },
        { "value": "few_times_a_year", "text": "A few times a year" },
        { "value": "monthly", "text": "Monthly" },
        { "value": "weekly", "text": "Weekly" }
      ]
    },
    {
      "id": "leisure_preference",
      "questionText": "When choosing leisure activities, which factors are most important to you?",
      "options": [
        { "value": "proximity_to_home", "text": "Proximity to home" },
        { "value": "community_involvement", "text": "Community involvement" },
        { "value": "variety_experiences", "text": "Variety of experiences" },
        { "value": "exclusivity", "text": "Exclusivity/unique offers" }
      ]
    },
    {
      "id": "community_engagement",
      "questionText": "How do you typically stay informed about events and offers in your neighborhood?",
      "options": [
        { "value": "social_media", "text": "Social media" },
        { "value": "direct_mail_flyers", "text": "Direct mail and flyers" },
        { "value": "local_newsletters", "text": "Local newsletters/newspapers" },
        { "value": "word_of_mouth", "text": "Word of mouth" }
      ]
    },
    {
      "id": "future_lifestyle",
      "questionText": "Imagine you could design your ideal day around your favorite activity. What does that day look like?",
      "options": [
        { "value": "sports_events", "text": "Enjoying a full day of sports events" },
        { "value": "community_cultural_activities", "text": "Attending a mix of community and cultural activities" },
        { "value": "relaxation_home", "text": "A day of relaxation at home" },
        { "value": "traveling_out_town", "text": "Traveling out of town for unique experiences" }
      ]
    }
  ],
  "giveaway": {
    "name": "Blue Jays Ticket Giveaway",
    "heroHeadline": "Win Jays Tickets During Canada Day!",
    "heroSubheadline": "Experience Summer Fun with Our Special Giveaway",
    "promotionDates": "Promotion runs from June 18, 2025 until July 2, 2025.",
    "endDate": "2025-07-02T23:59:59",
    "heroBackgroundImageUrl": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/apvzhdr33drm80cqfggtyr4wp0.jpg",
    "heroCtaText": "Enter Now for a Chance to Win!",
    "entryFormCtaText": "Count Me In!",
    "successModalHeaderText": "🎉 You're In! 🎉",
    "successModalMainMessage": "Your entry for the <strong>Blue Jays Ticket Giveaway</strong> has been successfully submitted. Best of luck!",
    "successModalEmailPrompt": "We'll announce the winner via email after the draw date. Keep an eye on your inbox!"
  },
  "prize": {
    "name": "$100 Worth of Blue Jays Tickets",
    "value": "$100 Value",
    "description": "Join us this Canada Day for your chance to win tickets worth $100 to see the Blue Jays live! Whether you're a die-hard fan or just love a day out, these tickets offer an exciting summer memory to cherish.",
    "images": [
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/fqdgw3a6mhrmc0cqfggrq5pz7w.jpg",
        "alt": "Blue Jays Stadium View"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/jbx2wx46tnrmc0cqfggsdda1z4.jpg",
        "alt": "Fans cheering at Blue Jays game"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/v65yd1e82hrm80cqfggvn71tt0.jpg",
        "alt": "Blue Jays tickets close up"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/7zm0770a81rme0cqfgh89vs8cw.jpg",
        "alt": "Baseball glove and ball"
      }
    ],
    "includedItems": [
      { "icon": "fas fa-ticket-alt", "text": "A $100 value ticket bundle for Jays games" },
      { "icon": "fas fa-users", "text": "Great for a day out with friends or family" },
      { "icon": "fas fa-baseball-ball", "text": "Experience live baseball excitement" },
      { "icon": "fas fa-check-circle", "text": "No purchase necessary to enter or win" },
      { "icon": "fas fa-bolt", "text": "Quick and easy online entry!" }
    ],
    "limitedTimeOfferText": "⚾ Limited Time Canada Day Giveaway!",
    "ctaButtonText": "I WANT TO WIN!"
  },
  "howToEnter": {
    "steps": [
      {
        "icon": "fas fa-qrcode",
        "title": "Scan and Win",
        "description": "Use our QR code to sign up instantly."
      },
      {
        "icon": "fas fa-envelope-open-text",
        "title": "Check Your Inbox",
        "description": "Our emails keep you updated on your entry status."
      }
    ],
    "highlights": [
      { "icon": "fas fa-stopwatch", "text": "Quick & Easy Entry" },
      { "icon": "fas fa-ticket-alt", "text": "$100 Ticket Prize" },
      { "icon": "fas fa-smile", "text": "Free to Enter!" }
    ]
  },
  "entryForm": {
    "subtitle": "Provide your details below for a chance to win Blue Jays tickets this summer!",
    "entryCountText": "Join over 100+ fans already entered!",
    "socialSharePrompt": "Tell your friends about this awesome giveaway:",
    "sharePlatforms": {
      "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      "twitter": "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Win $100 worth of Blue Jays tickets this Canada Day! Enter now!")
    }
  },
  "rules": {
    "fairSelectionInfo": {
      "title": "Fair & Square Selection",
      "text": "Our winner selection process is completely random and unbiased, ensuring everyone has an equal chance. The draw will be conducted using a certified random number generator."
    },
    "importantNotice": {
      "title": "Winner Notification - Check Your Email!",
      "text": "The lucky winner will be contacted via email after July 2, 2025. Please check your inbox and spam folder regularly."
    },
    "faq": [
      {
        "q": "Who is eligible to enter?",
        "a": "Open to legal residents of the area who are 18 years or older at the time of entry."
      },
      {
        "q": "How long does the giveaway run?",
        "a": "The giveaway runs from June 18, 2025, through midnight on July 2, 2025."
      },
      {
        "q": "How will the winner be selected?",
        "a": "One (1) winner will be chosen randomly from all eligible entries received within the promotion period."
      },
      {
        "q": "When and how will the winner be notified?",
        "a": "The winner will be notified by email shortly after July 2, 2025, with instructions to claim their prize."
      },
      {
        "q": "How many times can I enter?",
        "a": "Limit one entry per person/email address during the entire promotion period. Duplicate entries will be disqualified."
      },
      {
        "q": "Is my information secure?",
        "a": "Your privacy is respected and information is used only for this giveaway per our Privacy Policy. We do not sell your data."
      }
    ],
    "tips": [
      "Double-check your email address before submitting.",
      "Add shar@theskygroup.ca to your address book to ensure receipt of emails.",
      "Follow The Sky Group on social media for updates and announcements."
    ]
  },
  "footerContact": {
    "organizerName": "The Sky Group",
    "organizerLogoUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/eed1f4ef-c781-4015-8092-dda5b2f860d9/68278639dbfc24a322fd422d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E5726VF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T042209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWhXFqJwzyQPm499RwYKVcZsQocJzM082Oov7VC5sumQIhAJOG0GhRVPyDBVl3%2BKzEtkEz1rAudDZIGbSJwM2RByMsKv8DCG0QABoMNjM3NDIzMTgzODA1IgyunFuozL%2B1yAwPeScq3ANqKDWzO3vZA7bXsbpwa0Y%2FJ4ExKpFyVtvr3ZecbDX2a64mDvpfWj5p1QIqgflMM%2FGLI4AGpg8vufnweqRCcCE5LUavaUOPUKC9d4jwgdCtyJSmk%2Fe5PXejIiXQG3CiL6syg1BT8n4hyxJW9NwXgX8Ve2DdgeqLuRPBT0rHpzu8JLlau4mHfhDQkgZzT9zdAMatHszbzk1iG0FLZwKMwpsGg0g8gG%2FOX1hOau3w6AIIbU1PVkoLdxLWNyZ1ek6v8kMzo9U%2FxZd3DoafGMH5DJEX8GtvlxE666OEPu5I6UteMXviLouvLo34HTkabqQQf1Z0mzzCReJ79kk95W2mg7SmiXghRiJAeH1%2Bdv5kCC69wiP20C%2BNh9g%2Fk24Gh%2B4FCuK9tg5xOrWJaHdcESwY%2BgQNidxDzmpydqd4steH30euJc1r6NxGT1F%2FVbIehjOEjT4DBU7mIqnAIIoQNRvohLwo3IY%2BkMHXvsBKUP%2F8mJL4b2Tl67zISAFSogaDbVMxWeREjAbjgZwZyIBI5wclzAm%2BcIWJ%2FXjBTJROeuyUc5lpnr3erVfbog9qp6i%2BF9GHU7dG556YfiGGJFZaC32ltUJQaL44bt42zhxAY3S7092FPyfZ75f1JczdU5nPqzClwcPCBjqkAW1qlEr7QxyR%2BJ4A%2FuzROhX45v176x2WKi6mNr4UpqIqkAp0mE0GAaRTbREU1Ms5inrcGW7Vg0NbVdDSPLKwsRhMx3sVPvcZ6%2Fe9AiT4B3PBiWCkoenyXK3C0chAsgPq1ssO4DC72E9OnFu4Gq9k7i1TRYbiAnXsad6jKVZ1Dn2DOvauVvqbjSFagYqmJR2ZRgI%2BRDiBdIIhnPZEdCRppQA3WRFe&X-Amz-Signature=4d66200e44f471a90af1d3f5d336b74e8759b38d1b4e03d9b803abd76c284565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
    "email": "shar@theskygroup.ca",
    "phone": "1 647 887 4996",
    "address": "36 Distillery Lane Unit 500 Toronto M5A3C4",
    "social": {
      "facebook": "https://www.facebook.com/theskygroupre",
      "instagram": "https://www.instagram.com/theskygroup_re"
    },
    "copyrightOwner": "The Sky Group"
  },
  "meta": {
    "pageTitle": "Win Blue Jays Tickets This Canada Day!",
    "navBrandLogoText": "The Sky Group",
    "privacyPolicyLink": "https://www.mls.theskygroup.ca/privacy-policy"
  },
  "settings": {
    "ghlWebhookUrl": "",
    "theme": "dark",
    "confettiColors": ["#004C97", "#E31937", "#FFFFFF"],
    "showCountdownInHero": true
  },
  "deploymentInfo": {
    "repoName": "Giveaway-20",
    "repoUrl": "https://github.com/arslvn93/Giveaway-20",
    "netlifyUrl": "http://Giveaway-20.netlify.app",
    "netlifyId": "1003384477"
  }
};