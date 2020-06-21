import React, { Component } from "react";

class CrsCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSperm: false,
      showQues2: false,
      showThree: false,
      showFour: false,
      showFive: false,
      showSix: false,
      showSeven: false,
      showEight: false,
      showNine: false,
      showTwelve: false,
      showThirteen: false,
      showFourteen: false,
      showFifteen: false,
      showSixteen: false,
      showSeventeen:false,
      showEighteen: false,
      firstOffLang: [],
      secOffLang: [],
      isCommonLaw: null,

      first:{
        question: "What is your marital status?",
        martialStatus: [
          { name: "Annulled Marraige", type: 1 },
          { name: "Common-Law", type: 0 },
          { name: "Divorced / Separated", type: 1 },
          { name: "Legally Separated", type: 1 },
          { name: "Married", type: 0 },
          { name: "Never Married / Single", type: 1 },
          { name: "Widowed", type: 1 },
        ],
      },
     
      isSpermRes: [
        { name: "Yes", type: 1 },
        { name: "No", type: 0 },
      ],
      cumCanada: [
        { name: "Yes", type: 1 },
        { name: "No", type: 0 },
      ],
      third:{
        question:"How old are you?",
        thirdOptions: 
        [
          { name: "17 years of age or less", withSpouse: 0, withoutSpouse: 0 },
          { name: "18 years of age", withSpouse: 90, withoutSpouse: 99 },
          { name: "19 years of age", withSpouse: 95, withoutSpouse: 105 },
          { name: "20 to 29 years of age", withSpouse: 100, withoutSpouse: 110 },
          { name: "30 years of age", withSpouse: 95, withoutSpouse: 105 },
          { name: "31 years of age", withSpouse: 90, withoutSpouse: 99 },
          { name: "32 years of age", withSpouse: 85, withoutSpouse: 94 },
          { name: "33 years of age", withSpouse: 80, withoutSpouse: 88 },
          { name: "34 years of age", withSpouse: 75, withoutSpouse: 83 },
          { name: "35 years of age", withSpouse: 70, withoutSpouse: 77 },
          { name: "36 years of age", withSpouse: 65, withoutSpouse: 72 },
          { name: "37 years of age", withSpouse: 60, withoutSpouse: 66 },
          { name: "38 years of age", withSpouse: 55, withoutSpouse: 61 },
          { name: "39 years of age", withSpouse: 50, withoutSpouse: 55 },
          { name: "40 years of age", withSpouse: 45, withoutSpouse: 50 },
          { name: "41 years of age", withSpouse: 35, withoutSpouse: 39 },
          { name: "42 years of age", withSpouse: 25, withoutSpouse: 28 },
          { name: "43 years of age", withSpouse: 15, withoutSpouse: 17 },
          { name: "44 years of age", withSpouse: 5, withoutSpouse: 6 },
          { name: "45 years of age or more", withSpouse: 0, withoutSpouse: 0 },
        ]
       },
      four:{
        question:"What is your level of education?",
        fourOptions: [
          {
            name: "Less than secondary school (high school)",
            withSpouse: 0,
            withoutSpouse: 0,
          },
          {
            name: "Secondary diploma (high school graduation",
            withSpouse: 28,
            withoutSpouse: 30,
          },
          {
            name:
              "One-year degree, diploma or certificate from a university, college, trade or technical school, or other institute:",
            withSpouse: 84,
            withoutSpouse: 90,
          },
          {
            name:
              "Two-year program at a university, college, trade or technical school, or other institute",
            withSpouse: 91,
            withoutSpouse: 98,
          },
          {
            name:
              "Bachelor’s degree OR a three or more year program at a university, college, trade or technical school, or other institute",
            withSpouse: 112,
            withoutSpouse: 120,
          },
          {
            name:
              "Two or more certificates, diplomas, or degrees. One must be for a program of three or more years",
            withSpouse: 119,
            withoutSpouse: 128,
          },
          {
            name:
              "Master’s degree, OR professional degree needed to practice in a licensed profession (For “professional degree,” the degree program must have been in: medicine, veterinary medicine, dentistry, optometry, law, chiropractic medicine, or pharmacy.)",
            withSpouse: 126,
            withoutSpouse: 135,
          },
          {
            name: "Doctoral level university degree (Ph.D.)",
            withSpouse: 140,
            withoutSpouse: 150,
          },
        ]
      },
      five:{
        question:" Have you earned a Canadian degree, diploma or certificate?",
        fiveOptions: [
          { name: "Yes", type: 1 , value: 0},
          { name: "No", type: 0 , value:0},
        ]
      },
      six:{
        question:"Choose the best answer to describe this level of education?",
        sixOptions: [
        {
          name: "Secondary (high school) or less",
          withSpouse: 0,
          withoutSpouse: 0,
        },
        {
          name: "One- or two-year diploma or certificate",
          withSpouse: 15,
          withoutSpouse: 15,
        },
        {
          name:
            "Degree, diploma or certificate of three years or longer OR a Master’s, professional or doctoral degree of at least one academic year",
          withSpouse: 30,
          withoutSpouse: 30,
        },
       ]
      },
      seven:{
        question:"Are your test results less than two years old?",
        sevenOptions: [
          { name: "Yes", type: 1 },
          { name: "No", type: 0 },
        ] 
       },
      eight:{
        question:"Which language test did you take for your first official language?",
       eightOptions: [
        {
          name: "CELPIP-G",
          type: "A",
          options: [
            {
              type: "speaking",
              values: [
                { val: "10-12", withSpouse: 32, withoutSpouse: 34 },
                { val: "9", withSpouse: 29, withoutSpouse: 31 },
                { val: "8", withSpouse: 22, withoutSpouse: 23 },
                { val: "7", withSpouse: 16, withoutSpouse: 17 },
                { val: "6", withSpouse: 8, withoutSpouse: 9 },
                { val: "5", withSpouse: 6, withoutSpouse: 6 },
                { val: "4", withSpouse: 6, withoutSpouse: 6 },
                { val: "M, 0-3", withSpouse: 0, withoutSpouse: 0 },
              ],
            },
            {
              type: "Listening",
              values: [
                { val: "10-12", withSpouse: 32, withoutSpouse: 34 },
                { val: "9", withSpouse: 29, withoutSpouse: 31 },
                { val: "8", withSpouse: 22, withoutSpouse: 23 },
                { val: "7", withSpouse: 16, withoutSpouse: 17 },
                { val: "6", withSpouse: 8, withoutSpouse: 9 },

                { val: "5", withSpouse: 6, withoutSpouse: 6 },

                { val: "4", withSpouse: 6, withoutSpouse: 6 },

                { val: "M, 0-3", withSpouse: 0, withoutSpouse: 0 },
              ],
            },
            {
              type: "Reading",
              values: [
                { val: "10-12", withSpouse: 32, withoutSpouse: 34 },
                { val: "9", withSpouse: 29, withoutSpouse: 31 },
                { val: "8", withSpouse: 22, withoutSpouse: 23 },
                { val: "7", withSpouse: 16, withoutSpouse: 17 },
                { val: "6", withSpouse: 8, withoutSpouse: 9 },
                { val: "5", withSpouse: 6, withoutSpouse: 6 },
                { val: "4", withSpouse: 6, withoutSpouse: 6 },
                { val: "M, 0-3", withSpouse: 0, withoutSpouse: 0 },
              ],
            },
            {
              type: "Writing",
              values: [
                { val: "10-12", withSpouse: 32, withoutSpouse: 34 },
                { val: "9", withSpouse: 29, withoutSpouse: 31 },
                { val: "8", withSpouse: 22, withoutSpouse: 23 },
                { val: "7", withSpouse: 16, withoutSpouse: 17 },
                { val: "6", withSpouse: 8, withoutSpouse: 9 },
                { val: "5", withSpouse: 6, withoutSpouse: 6 },
                { val: "4", withSpouse: 6, withoutSpouse: 6 },
                { val: "M, 0-3", withSpouse: 0, withoutSpouse: 0 },
              ],
            },
          ],
        },
        {
          name: "IELTS",
          type: "B",
          options: [
            {
              type: "speaking",
              values: [
                { val: "7.5-9.0",  withSpouse:6, withoutSpouse: 6},
                { val: "7.0",      withSpouse:3, withoutSpouse: 3},
                { val: "6.5",      withSpouse:1, withoutSpouse: 1},
                { val: "6.0" ,     withSpouse:1, withoutSpouse: 1},
                { val: "5.5"    ,  withSpouse:1, withoutSpouse: 1},
                { val: "5.0"    ,  withSpouse:1, withoutSpouse: 1},
                { val: "4.0-4.5",  withSpouse:0, withoutSpouse: 0},
                { val: "0-3.5"  ,  withSpouse:0, withoutSpouse: 0}
              ],
            },
            {
              type: "Listening",
              values: [
                { val: "8.5-9.0"  ,withSpouse:6, withoutSpouse: 6},
                { val: "8.0"      ,withSpouse:3, withoutSpouse: 3},
                { val: "7.5"      ,withSpouse:3, withoutSpouse: 3},
                { val: "6.0-7.0"  ,withSpouse:1, withoutSpouse: 1},
                { val: "5.5"      ,withSpouse:1, withoutSpouse: 1},
                { val: "5.0"      ,withSpouse:1, withoutSpouse: 1},
                { val: "4.5"      ,withSpouse:0, withoutSpouse: 0},
                { val: "0-4.0"    ,withSpouse:0, withoutSpouse: 0},
              ],
            },
            {
              type: "Reading",
              values: [
                { val: "8.0-9.0",withSpouse:6, withoutSpouse: 6},                             
                { val: "7.0-7.5",withSpouse:3, withoutSpouse: 3},                             
                { val: "6.5"    ,withSpouse:1, withoutSpouse: 1},                             
                { val: "6.0"    ,withSpouse:1, withoutSpouse: 1},                             
                { val: "5.0-5.5",withSpouse:1, withoutSpouse: 1},                             
                { val: "4.0-4.5",withSpouse:0, withoutSpouse: 0},                             
                { val: "3.5"    ,withSpouse:0, withoutSpouse: 0},                             
                { val: "0-3.0"  ,withSpouse:0, withoutSpouse: 0}
                             
              ],
            },
            {
              type: "Writing",
              values: [
                { val: "7.5-9.0",  withSpouse:6, withoutSpouse: 6},
                { val: "7.0",      withSpouse:3, withoutSpouse: 3},
                { val: "6.5",      withSpouse:1, withoutSpouse: 1},
                { val: "6.0" ,     withSpouse:1, withoutSpouse: 1},
                { val: "5.5"    ,  withSpouse:1, withoutSpouse: 1},
                { val: "5.0"    ,  withSpouse:1, withoutSpouse: 1},
                { val: "4.0-4.5",  withSpouse:0, withoutSpouse: 0},
                { val: "0-3.5"  ,  withSpouse:0, withoutSpouse: 0}
              ],
            },
          ],
        },
        {
          name: "TEF Canada",
          type: "C",
          options: [
            {
              type: "speaking",
              values: [
                { val: "393-450" },
                { val: "371-392" },
                { val: "349-370" },
                { val: "310-348" },
                { val: "271-309" },
                { val: "226-270" },
                { val: "181-225" },
                { val: "0-180" },
              ],
            },
            {
              type: "Listening",
              values: [
                { val: "316-360" },
                { val: "298-315" },
                { val: "280-297" },
                { val: "249-279" },
                { val: "217-248" },
                { val: "181-216" },
                { val: "145-180" },
                { val: "0-144" },
              ],
            },
            {
              type: "Reading",
              values: [
                { val: "263-300" },
                { val: "248-262" },
                { val: "233-247" },
                { val: "207-232" },
                { val: "181-206" },
                { val: "151-180" },
                { val: "121-150" },
                { val: "0-120" },
              ],
            },
            {
              type: "Writing",
              values: [
                { val: "393-450" },
                { val: "371-392" },
                { val: "349-370" },
                { val: "310-348" },
                { val: "271-309" },
                { val: "226-270" },
                { val: "181-225" },
                { val: "0-180" },
              ],
            },
          ],
        },
        {
          name: "TCF Canada",
          type: "D",
          options: [
            {
              type: "speaking",
              values: [
                { val: "16-20" },
                { val: "14-15" },
                { val: "12-13" },
                { val: "10-11" },
                { val: "7-9" },
                { val: "6" },
                { val: "4-5" },
                { val: "0-3" },
              ],
            },
            {
              type: "Listening",
              values: [
                { val: "549-699" },
                { val: "523-549" },
                { val: "503-522" },
                { val: "459-502" },
                { val: "398-457" },
                { val: "369-397" },
                { val: "331-368" },
                { val: "0-330" },
              ],
            },
            {
              type: "Reading",
              values: [
                { val: "549-699" },
                { val: "524-548" },
                { val: "499-523" },
                { val: "453-498" },
                { val: "406-452" },
                { val: "375-405" },
                { val: "342-374" },
                { val: "0-341" },
              ],
            },
            {
              type: "Writing",
              values: [
                { val: "16-20" },
                { val: "14-15" },
                { val: "12-13" },
                { val: "10-11" },
                { val: "7-9" },
                { val: "6" },
                { val: "4-5" },
                { val: "0-3" },
              ],
            },
          ],
        },
       ]
      },
      nineOptions: [],
      tenOptions: [],
      elevenOptions: [],
      twelve:{
        question: "Work Experience In the last ten years, how many years of skilled work experience in Canada do you have?",
        twelveOptions: [
        { name: "None or less than a year", withSpouse: 0, withoutSpouse: 0 },
        { name: "1 year", withSpouse:  35, withoutSpouse: 40 },
        { name: "2 years", withSpouse: 46, withoutSpouse: 53 },
        { name: "3 years", withSpouse: 56, withoutSpouse: 64 },
        { name: "4 years", withSpouse: 63, withoutSpouse: 72 },
        { name: "5 years or mores", withSpouse: 70, withoutSpouse: 80 },
      ]},
      thirteen:{ question:  "In the last 10 years, how many total years of foreign skilled work experience do you have?",
      thirteenOptions: [
        { name: "No foreign work experience", oneYear: 0, twoYear: 0 },
        {
          name: "1 or 2 years of foreign work experience",
          oneYear: 13,
          twoYear: 25,
        },
        {
          name: "3 years or more of foreign work experience",
          oneYear: 25,
          twoYear: 50,
        },
      ]},
      fourteen:{
        question:"Do you have a certificate of qualification from a Canadian province, territory or federal body?",
        fourteenOptions: [
          { name: "Yes", type: 1 , plusFive: 50, plusSeven:50},
          { name: "No", type: 0, plusFive: 0, plusSeven:0 },
        ]},
        fifteen:{
          question:"Do you have a valid job offer supported by a Labour Market Impact Assessment (if needed)?",
        fifteenOptions: [
          { name: "Yes", type: 1 },
          { name: "No", type: 0 },
        ]
      },
      fifteenA:{
        question:"Which NOC skill type or level is the job offer?",
       fifteenAOptions:[
        {name:"NOC 00", value: 200},
        {name:"Any other NOC 0, A or B or c or D", value: 50}
      ]
    },
    sixteen:{
      question:"Do you have a nomination certificate from a province or territory?",
      sixteenOptions: [
        { name: "Yes", type: 1, value:600 },
        { name: "No", type: 0, value: 0 },
      ]
    },
    seventeen:{
      question:"Do you or your spouse or common law partner (if they will come with you to Canada) have at least one brother or sister living  in Canada who is a citizen or permanent resident?",
     seventeenOptions: [
        { name: "Yes", type: 1 , value:15},
        { name: "No", type: 0, value:0 },
      ]},
      totalScore: [],
      typeWithSpowithoutSpou: null,
    };
  }

  handleChange = (e) => {
    let value = e.target.value.split("-")[0];
    let data  = e.target.value.split("-")[1];
    if (value === "0") {
      this.setState({ showQues2: true, typeWithSpowithoutSpou: value, isCommonLaw: data });
    } else if (value === "1") {
      this.setState({
        showQues2: false,
        showSperm: false,
        showThree: true,
        typeWithSpowithoutSpou: value,
        isCommonLaw: data
      });
    } else {
      this.setState({ showQues2: false, showSperm: false, showThree: false });
    }
  };
  handleSpermChange = (e) => {
    let value = e.target.value;

    if (value === "1") {
      this.setState({ showSperm: true });
    } else {
      this.setState({ showSperm: false, showThree: true });
    }
  };
  changeThird = (e, q) => {
    let value = e.target.value;
    let { totalScore } = this.state;
    if (value === "none") {
      this.setState({ showFour: false });
    } else {
      let obj = {
        question: q,
        answer: value,
        key:"third",
        innerKey:"thirdOptions",
        withwithout: true
      };
      if (totalScore.length > 0) {
        let isFound = totalScore.filter((ele) => ele.question !== obj.question);
        this.setState({
          totalScore: [...isFound, obj],
          showFour: true,
        });
      } else {
        this.setState({
          totalScore: [...totalScore, obj],
          showFour: true,
        });
      }
    }
  };
  handleFourChange = (e, q) => {
    let value = e.target.value;
    let { totalScore } = this.state;
    if (value === "none") {
      this.setState({ showFive: false });
    } else {
      let obj = {
        question: q,
        answer: value,
        key:"four",
        innerKey:"fourOptions",
        withWithout: true,
      };
      if (totalScore.length > 0) {
        let isFound = totalScore.filter((ele) => ele.question !== obj.question);
        this.setState({
          totalScore: [...isFound, obj],
          showFive: true,
        });
      } else {
        this.setState({
          totalScore: [...totalScore, obj],
          showFive: true,
        });
      }
    }
  };
  handleFiveChange = (e, q) => {
    // let value = e.target.value;
    // if (value === "1") {
    //   this.setState({ showSix: true, showSeven: false });
    // } else {
    //   this.setState({ showSeven: true, showSix: false });
    // }

    let value = e.target.value;
    let { totalScore } = this.state;
    if (value === "none") {
      this.setState({ showSix: false});
    } else if(value==="0"){
      let obj = {
        question: q,
        answer: value,
        key:"five",
        innerKey:"fiveOptions",
        withWithout: false,
      };
      if (totalScore.length > 0) {
        let isFound = totalScore.filter((ele) => ele.question !== obj.question);
        this.setState({
          totalScore: [...isFound, obj],
          showSix: true,
          showSeven: false
        });
      } else {
        this.setState({
          totalScore: [...totalScore, obj],
          showSix: true,
          showSeven: false
        });
      }
    }else{
      this.setState({ showSeven: true, showSix: false });
    }


  };
  handleSixChange = (e, q) => {
    let value = e.target.value;
    let { totalScore } = this.state;
    if (value === "none") {
      this.setState({ showSeven: false });
    } else {
      let obj = {
        question: q,
        answer: value,
        key:"six",
        innerKey:"sixOptions",
        withwithout: true
      };
      if (totalScore.length > 0) {
        let isFound = totalScore.filter((ele) => ele.question !== obj.question);
        this.setState({
          totalScore: [...isFound, obj],
          showSeven: true,
        });
      } else {
        this.setState({
          totalScore: [...totalScore, obj],
          showSeven: true,
        });
      }
    }
  };
  handleSevenChange = (e) => {
    let value = e.target.value;
    if (value === "1") {
      this.setState({ showEight: true });
    } else {
      this.setState({ showEight: false });
    }
  };
  handleEightChange = (e, q) => {
    let { eight, totalScore } = this.state;
    let {eightOptions}= eight;
    if (e.target.value !== undefined) {
      let value = e.target.value;
      let obj = {
        question: q,
        answer: value,
        key:"eight",
        innerKey:"eightOptions",
        withwithout: true,
        getInner: "firstOffLang"
      };
      let isFound = totalScore.filter((ele) => ele.question !== obj.question);
    
      this.setState({
        showNine: true,
        totalScore: [...isFound, obj],
        nineOptions: eightOptions.filter((data) => data.type === value),
        tenOptions: eightOptions.filter((data) => {
          if (value === "A" || value === "B") {
            return data.type === "C" || data.type === "D";
          } else {
            return data.type === "A" || data.type === "B";
          }
        }),
      });
    } else {
      this.setState({
        showNine: false,
        nineOptions: [],
        tenOptions: [],
      });
    }
  };
  handleNineChange = (e, key) => {
    let { firstOffLang, totalScore } = this.state;

    let questionName = null;
    if (key === 0) {
      questionName = "speak1";
    } else if (key === 1) {
      questionName = "listen1";
    } else if (key === 3) {
      questionName = "read1";
    } else {
      questionName = "write1";
    }

    let obj = {
      key: key,
      value: e.target.value,
      answer: e.target.value
    };
    let remain = [];

    let newtotalScore = totalScore.filter((ele) => ele.question !== questionName);

    firstOffLang = firstOffLang.filter((data) => {
      if (data.key === key) {
        return data;
      } else {
        return remain.push(data);
      }
    });

    if (firstOffLang.length > 0) {
      this.setState({
        firstOffLang: [...remain, obj],
        totalScore: [
          ...newtotalScore,
          { question: questionName, answer: obj.answer, type:"firstOffLang"  },
        ],
      });
    } else {
      this.setState({
        firstOffLang: [...firstOffLang, obj],
        totalScore: [
          ...newtotalScore,
          { question: questionName, answer: obj.answer, type:"firstOffLang" },
        ],
      });
    }
  };

  handleTenChange = (e) => {
    let { eight, totalScore } = this.state;
    let {eightOptions}= eight;
    let value = e.target.value;
    let obj = {
      question: "Do you have other language results?",
      answer: value,
      withwithout: true,
      key: "eight",
      innerKey: "eightOptions",
      getInner:"secOffLang"
      
    };
    let isFound = totalScore.filter((ele) => ele.question !== obj.question);
    if (value === "A" || value === "B" || value === "C" || value === "D") {
      this.setState({
        showEleven: true,
        showTwelve: false,
        elevenOptions: eightOptions.filter((data) => data.type === value),
        totalScore: [...isFound, obj]
      });
    } else {
      this.setState({
        showEleven: false,
        showTwelve: true,
        elevenOptions: [],
      });
    }
  };
  handleElevenChange = (e, key) => {
    let { secOffLang, totalScore } = this.state;

    let questionName = null;
    if (key === 0) {
      questionName = "speak2";
    } else if (key === 1) {
      questionName = "listen2";
    } else if (key === 3) {
      questionName = "read2";
    } else {
      questionName = "write2";
    }

    let obj = {
      key: key,
      value: e.target.value,
      answer: e.target.value,
    };
    let remain = [];

    let newtotalScore = totalScore.filter((ele) => ele.question !== questionName);

    secOffLang = secOffLang.filter((data) => {
      if (data.key === key) {
        return data;
      } else {
        return remain.push(data);
      }
    });

    if (secOffLang.length > 0) {
      this.setState({
        secOffLang: [...remain, obj],
        totalScore: [
          ...newtotalScore,
          { question: questionName, answer: obj.answer, type:"secOffLang" },
        ],
      });
    } else {
      this.setState({
        secOffLang: [...secOffLang, obj],
        totalScore: [
          ...newtotalScore,
          { question: questionName, answer: obj.answer, type:"secOffLang" },
        ],
      });
    }
  };

  handleTwelveChange = (e, q) => {
    let value = e.target.value;
    let { totalScore } = this.state;
    if (value === "none") {
      this.setState({ showThirteen: false });
    } else {
      let obj = {
        question: q,
        answer: value,
        key:"twelve",
        innerKey:"twelveOptions",
        withwithout: true
      };
      if (totalScore.length > 0) {
        let isFound = totalScore.filter((ele) => ele.question !== obj.question);
        this.setState({
          totalScore: [...isFound, obj],
          showThirteen: true,
        });
      } else {
        this.setState({
          totalScore: [...totalScore, obj],
          showThirteen: true,
        });
      }
    }
  };
  handleThirteenChange = (e, q) => {
    let value = e.target.value;
    let { totalScore } = this.state;
    if (value === "none") {
      this.setState({ showFourteen: false });
    } else {
      let obj = {
        question: q,
        answer: value,
        key:"thirteen",
        innerKey:"thirteenOptions",
        withwithout: false
      };
      if (totalScore.length > 0) {
        let isFound = totalScore.filter((ele) => ele.question !== obj.question);
        this.setState({
          totalScore: [...isFound, obj],
          showFourteen: true,
        });
      } else {
        this.setState({
          totalScore: [...totalScore, obj],
          showFourteen: true,
        });
      }
    }
  };
  handleFourteenChange = (e, q) => {
    let value = e.target.value;
    let { totalScore } = this.state;
    if (value === "none") {
      this.setState({ showFifteen: false ,    showEighteen: false });
      // document.getElementById("calButton").setAttribute("disabled", true);
    } else {
      let obj = {
        question: q,
        answer: value,
        key:"fourteen",
        innerKey:"fourteenOptions",
        withwithout: false
      };
      if (totalScore.length > 0) {
        let isFound = totalScore.filter((ele) => ele.question !== obj.question);
        this.setState({
          totalScore: [...isFound, obj],
          showFifteen: true,
          showEighteen: true 

        });
        // document.getElementById("calButton").removeAttribute("disabled");
      } else {
        this.setState({
          totalScore: [...totalScore, obj],
          showFifteen: true,
          showEighteen: true
        });
        // document.getElementById("calButton").removeAttribute("disabled");
      }
    }
  };
  handleFifteenChange = (e ) => {
    // console.log(e.target.value);
    if (e.target.value !== "none") {

      if(e.target.value==="0"){
        this.setState({
          showFifteenA: true,
          showSixteen: false,
        })
      }else{
      this.setState({
        showSixteen: true,
      });
      }
    }
    else {
      this.setState({
        showSixteen: false,
      });
    }
  };

  handleFifteenAChange=(e, q)=>{
  
    let value = e.target.value;
    let { totalScore } = this.state;
    if (value === "none") {
      this.setState({ showSixteen: false });
    } else {
      let obj = {
        question: q,
        answer: value,
        key:"fifteenA",
        innerKey:"fifteenAOptions",
        withwithout: false
      };
      if (totalScore.length > 0) {
        let isFound = totalScore.filter((ele) => ele.question !== obj.question);
        this.setState({
          totalScore: [...isFound, obj],
          showSixteen: true,
        });
      } else {
        this.setState({
          totalScore: [...totalScore, obj],
          showSixteen: true,
        });
      }
    }
  }
  handleSixteenChange = (e, q) => {
    let value = e.target.value;
    let { totalScore } = this.state;
    if (value === "none") {
      this.setState({ showSeventeen: false });
    } else {
      let obj = {
        question: q,
        answer: value,
        key:"sixteen",
        innerKey:"sixteenOptions",
        withwithout: false
      };
      if (totalScore.length > 0) {
        let isFound = totalScore.filter((ele) => ele.question !== obj.question);
        this.setState({
          totalScore: [...isFound, obj],
          showSeventeen: true,
        });
      } else {
        this.setState({
          totalScore: [...totalScore, obj],
          showSeventeen: true,
        });
      }
    }
  };
  handleSeventeenChnage = (e, q) => {

    let value = e.target.value;
    let { totalScore } = this.state;
    if (value === "none") {
      this.setState({ showEighteen: false });
    } else {
      let obj = {
        question: q,
        answer: value,
        key:"seventeen",
        innerKey:"seventeenOptions",
        withwithout: false
      };
      if (totalScore.length > 0) {
        let isFound = totalScore.filter((ele) => ele.question !== obj.question);
        this.setState({
          totalScore: [...isFound, obj],
          // showEighteen: value !== "none" ? true: false,
        });
      } else {
        this.setState({
          totalScore: [...totalScore, obj],
          // showEighteen: value !== "none" ? true: false,
        });
      }
    }

  };



  calculateScore=(e)=>{
    e.preventDefault();
    // console.log(e);
    // console.log(this.state.totalScore);
    // console.log(this.state.typeWithSpowithoutSpou);
    
    let {totalScore, typeWithSpowithoutSpou, isCommonLaw}= this.state;
   
    //  )
     let scoreSpouse=[];
     let firstOff=[];
     let secondOff=[];
     let additional=[];
     let checkThirteen= totalScore.filter(score=> score.type==="firstOffLang").map((ele)=>   
     {  
       if(ele.answer==="0" || ele.answer==="1" ) {
       return {value:10};
       }
       else if(ele.answer==="1" || ele.answer==="2" || ele.answer==="3") {
         return {value: 7};
        }else{
          return {value: null};
        }
      });
      let checkFourteen= totalScore.filter(score=> score.type==="firstOffLang").map((ele)=>   
      {  
        if(ele.answer==="5" || ele.answer==="4" || ele.answer === "3") {
        return {value:7};
        }
        else if(ele.answer==="0" || ele.answer==="1" || ele.answer==="2" || ele.answer==="3") {
          return {value: 10};
         }else{
           return {value: null};
         }
       })

      totalScore.map(score=> 
      {
        if(score.withwithout && score.getInner === undefined){
            let answer=  typeWithSpowithoutSpou ==="1" || isCommonLaw === "Common-Law" ?
                 this.state[score.key][score.innerKey][parseInt(score.answer)].withoutSpouse :
                this.state[score.key][score.innerKey][parseInt(score.answer)].withSpouse;
               scoreSpouse.push({...score, newAnswer: answer})
               return score
        }else if(score.type==="firstOffLang"){
          let answer=  typeWithSpowithoutSpou ==="1" || isCommonLaw === "Common-Law"?
          this.state.eight.eightOptions[0].options[0].values[parseInt(score.answer)].withoutSpouse :
          this.state.eight.eightOptions[0].options[0].values[parseInt(score.answer)].withSpouse;
          firstOff.push({...score, newAnswer: answer})
        return score
        }else if(score.type==="secOffLang"){
          let answer=  typeWithSpowithoutSpou ==="1" || isCommonLaw === "Common-Law"?
          this.state.eight.eightOptions[1].options[0].values[parseInt(score.answer)].withoutSpouse :
          this.state.eight.eightOptions[1].options[0].values[parseInt(score.answer)].withSpouse;
          secondOff.push({...score, newAnswer: answer})
        return score
        }else if(score.key==="thirteen"){
         let checkAnswerten= checkThirteen.map(ele=> ele.value=== 10).every(v => v === true);
         let checkAnswerSeven= checkThirteen.map(ele=> ele.value=== 7).every(v => v === true);
          
         let answer=checkAnswerten ?  this.state.thirteen.thirteenOptions[parseInt(score.answer)].twoYear 
            :  (checkAnswerSeven ? this.state.thirteen.thirteenOptions[parseInt(score.answer)].oneYear: 0 )
          return additional.push({...score, newAnswer: answer*2 > 50 ? 50 : answer*2})
        }else if(score.key==="fourteen"){
          let checkAnswerten= checkFourteen.map(ele=> ele.value=== 10).every(v => v === true);
         let checkAnswerSeven= checkFourteen.map(ele=> ele.value=== 7).every(v => v === true);
          
         let answer=checkAnswerten ?  this.state.fourteen.fourteenOptions[parseInt(score.answer)].plusSeven 
            :  (checkAnswerSeven ? this.state.fourteen.fourteenOptions[parseInt(score.answer)].plusFive: 0 )
          return additional.push({...score, newAnswer: answer})
        }else if(score.key==="fifteenA"){
          let answer=   this.state[score.key][score.innerKey][parseInt(score.answer)].value ;
          additional.push({...score, newAnswer: answer})
           return score
        }else if(score.key=== "sixteen"){
          let answer=   this.state[score.key][score.innerKey][parseInt(score.answer)].value ;
          additional.push({...score, newAnswer: answer})
           return score
        }else if(score.key=== "seventeen"){
          let answer=   this.state[score.key][score.innerKey][parseInt(score.answer)].value ;
          additional.push({...score, newAnswer: answer})
           return score
        }else if(score.key ==="five"){
          let answer=   this.state[score.key][score.innerKey][parseInt(score.answer)].value ;
          additional.push({...score, newAnswer: answer})
          return score
        }
        else{
          return score;
        }
    })
    
    let finalScore= [...scoreSpouse, ...firstOff, ...secondOff, ...additional].reduce((acc, curr) => acc + curr.newAnswer, 0);
    this.setState({finalScore: finalScore});
  }
  render() {
    let {
      first,
      showQues2,
      isSpermRes,
      showSperm,
      cumCanada,
      showThree,
      third,
      showFour,
      four,
      five,
      six,
      seven,
      eight,
      nineOptions,
      showEleven,
      showTwelve,
      showFive,
      showSix,
      showSeven,
      showEight,
      showNine,
      showThirteen,
      showFourteen,
      showFifteen,
      showFifteenA,
      showSixteen,
      showSeventeen,
      showEighteen,
      tenOptions,
      elevenOptions,
      twelve,
      firstOffLang,
      secOffLang,
      thirteen,
      fourteen,
      fifteen,
      fifteenA,
      sixteen,
      seventeen,
      finalScore
    } = this.state;
    let nineOp = nineOptions[0];

  //  console.log(this.state.totalScore);
    return (
      <div className="container   p-3">
        <div className="d-flex custom-class">
          <div>{first.question}</div>
          <select onChange={this.handleChange}>
            <option default>Select Status</option>
            {first.martialStatus.map((ele, key) => {
              return (
                <option key={key} value={ele.type+"-"+ele.name} >
                  {ele.name}
                </option>
              );
            })}
          </select>
        </div>
        {showQues2 ? (
          <div className="d-flex custom-class">
            <div>
              2) i. Is your spouse or common-law partner a citizen or permanent
              resident of Canada?
            </div>
            <select onChange={this.handleSpermChange}>
              <option default>Please Select</option>
              {isSpermRes.map((ele, key) => {
                return (
                  <option key={key} value={ele.type}>
                    {ele.name}
                  </option>
                );
              })}
            </select>
          </div>
        ) : null}

        {showSperm ? (
          <div className="d-flex custom-class">
            <div>
              2) ii. Will your spouse or common-law partner come with you to
              Canada?
            </div>
            <select
              onChange={() => {
                this.setState({ showThree: true });
              }}
            >
              <option default>Please Select</option>
              {cumCanada.map((ele, key) => {
                return (
                  <option key={key} value={ele.type}>
                    {ele.name}
                  </option>
                );
              })}
            </select>
          </div>
        ) : null}

        {showThree ? (
          <div className="d-flex custom-class">
            <div>
              {third.question} Choose the best answer: If you’ve been invited
              to apply, enter your age on the date you were invited. OR If you
              plan to complete an Express Entry profile, enter your current age.
            </div>
            <select onChange={(e) => this.changeThird(e, third.question)}>
              <option value="none">Please Select</option>
              {third.thirdOptions.map((ele, key) => {
                return (
                  <option key={key} value={key}>
                    {ele.name}
                  </option>
                );
              })}
            </select>
          </div>
        ) : null}
        {showFour ? (
          <div className="d-flex custom-class">
            <div>
              {four.question} 
            </div>
            <select onChange={(e)=>this.handleFourChange(e, four.question)}>
              <option value="none">Please Select</option>
              {four.fourOptions.map((ele, key) => {
                return (
                  <option key={key} value={key}>
                    {ele.name.slice(0, 50)}
                  </option>
                );
              })}
            </select>
          </div>
        ) : null}
        {showFive ? (
          <div className="d-flex custom-class">
            <div>
              {five.question}
             
            </div>
            <select onChange={(e)=>this.handleFiveChange(e, five.question)}>
              <option>Please Select</option>
              {five.fiveOptions.map((ele, key) => {
                return (
                  <option key={key} value={key}>
                    {ele.name}
                  </option>
                );
              })}
            </select>
          </div>
        ) : null}

        {showSix ? (
          <div className="d-flex custom-class">
            <div>
             {six.question}
            </div>

            <select onChange={(e)=>this.handleSixChange(e, six.question)}>
              <option value="none">Please Select</option>
              {six.sixOptions.map((ele, key) => {
                return (
                  <option key={key} value={key}>
                    {ele.name.slice(0, 50)}
                  </option>
                );
              })}
            </select>
          </div>
        ) : null}
        {showSeven ? (
          <div className="d-flex custom-class">
           
            <div>{seven.question}</div>
            <select onChange={this.handleSevenChange}>
              <option>Please Select</option>
              {seven.sevenOptions.map((ele, key) => {
                return (
                  <option key={key} value={ele.type}>
                    {ele.name}
                  </option>
                );
              })}
            </select>
          </div>
        ) : null}

        {showEight ? (
          <div>
            <div className="d-flex custom-class">
              <div>
                {eight.question}
              </div>
              <select onChange={(e)=>this.handleEightChange(e, eight.question)}>
                <option>Please Select</option>
                {eight.eightOptions.map((ele, key) => {
                  return (
                    <option key={key} value={ele.type}>
                      {ele.name}
                    </option>
                  );
                })}
              </select>
            </div>
            {showNine ? (
              <div className="d-flex">
                {nineOp !== undefined
                  ? nineOp.options.map((ele, key) => {
                      return (
                        <div key={key}>
                          <div className="d-flex custom-class">
                            <div>{ele.type}</div>
                            <select
                              onChange={(e) => this.handleNineChange(e, key)}
                            >
                              <option value="none">Select</option>
                              {ele.values.map((val, key) => {
                                return (
                                  <option value={key} key={key}>
                                    {val.val}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>
            ) : null}

            {firstOffLang.length === 4 ? (
              <div className="d-flex custom-class">
                <div>
                  iii. Do you have other language results? If so, which language
                  test did you take for your second official language? Test
                  results must be less than two years old.
                  <select onChange={this.handleTenChange}>
                    <option value={0}>Select</option>
                    {tenOptions.map((data, key) => {
                      return (
                        <option value={data.type} key={key}>
                          {data.name}
                        </option>
                      );
                    })}
                    <option value={0}>Not Applicable</option>
                  </select>
                </div>
              </div>
            ) : null}

            {showEleven ? (
              <div className="d-flex">
                {elevenOptions[0].options.map((ele, key) => {
                  return (
                    <div key={key} className="d-flex custom-class">
                      <div>{ele.type}</div>
                      <select onChange={(e) => this.handleElevenChange(e, key)}>
                        <option value={0}>Select</option>
                        {ele.values.map((val, key) => {
                          return (
                            <option value={key} key={key}>
                              {val.val}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  );
                })}
              </div>
            ) : null}

            {showTwelve || secOffLang.length === 4 ? (
              <div className="d-flex custom-class">
                <div>
                  {twelve.question}
                </div>
                <select onChange={(e)=>this.handleTwelveChange(e, twelve.question)}>
                  <option value="none">Select</option>

                  {twelve.twelveOptions.map((data, key) => {
                    return <option key={key} value={key}>{data.name}</option>;
                  })}
                </select>
              </div>
            ) : null}

            {showThirteen ? (
              <div className="d-flex custom-class">
                <div>
                  {thirteen.question}
                </div>
                <select onChange={(e) => this.handleThirteenChange(e, thirteen.question)}>
                  <option value="none">Select</option>
                  {thirteen.thirteenOptions.map((ele, key) => {
                    return <option key={key} value={key}> {ele.name}</option>;
                  })}
                </select>
              </div>
            ) : null}

            {showFourteen ? (
              <div className="d-flex custom-class">
                <div>
                 {fourteen.question}
                </div>
                <select onChange={(e)=>this.handleFourteenChange(e, fourteen.question)}>
                  <option value="none">Select</option>
                  {fourteen.fourteenOptions.map((ele, key) => {
                    return <option key={key} value={key}> {ele.name}</option>;
                  })}
                </select>
              </div>
            ) : null}
            {showFifteen ? (
              <div className="d-flex custom-class">
                <div>
                {fifteen.question}
                </div>
                <select onChange={(e)=>this.handleFifteenChange(e, fifteen.question)}>
                  <option value="none">Select</option>
                  {fifteen.fifteenOptions.map((ele, key) => {
                    return <option key={key} value={key}>{ele.name}</option>;
                  })}
                </select>
              </div>
            ) : null}

            {showFifteenA ?
             ( <div> 
              <div>{fifteenA.question}</div>
             <select onChange={(e)=>this.handleFifteenAChange(e, fifteenA.question)}>
                  <option value="none">Select</option>
                  {fifteenA.fifteenAOptions.map((ele, key)=>{
                    return <option key={key} value={key}>{ele.name}</option>;
                  })}
             </select>
              </div>
              ) : null  }

            {showSixteen ? (
              <div className="d-flex custom-class">
                <div>
                 {sixteen.question}
                </div>
                <select onChange={(e)=>this.handleSixteenChange(e, sixteen.question)}>
                  <option value="none">Select</option>
                  {sixteen.sixteenOptions.map((ele, key) => {
                    return <option key={key} value={key}>{ele.name}</option>;
                  })}
                </select>
              </div>
            ) : null}

            {showSeventeen ? (
              <div className="d-flex custom-class">
                <div>
                 {seventeen.question}
                </div>
                <select onChange={(e)=>this.handleSeventeenChnage(e, seventeen.question)}>
                  <option value="none">Select</option>
                  {seventeen.seventeenOptions.map((ele, key) => {
                    return <option key={key} value={key}>{ele.name}</option>;
                  })}
                </select>
              </div>
            ) : null}
             
              </div>
        ) : null}

        <div className="d-flex justify-content-center">
      {showEighteen ?  <button className="btn btn-primary mr-3" disabled={showEighteen ? false: true}  onClick={this.calculateScore}>Calculate Score</button>
      : null}
      {finalScore && <h3>Total Score: {finalScore}</h3>}
      </div>
      </div>
    );
  }
}

export default CrsCalculator;
