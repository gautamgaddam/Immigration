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
      firstOffLang: [],
      secOffLang: [],
      martialStatus: [
        { name: "Annulled Marraige", type: 1 },
        { name: "Common-Law", type: 0 },
        { name: "Divorced / Separated", type: 1 },
        { name: "Legally Separated", type: 1 },
        { name: "Married", type: 0 },
        { name: "Never Married / Single", type: 1 },
        { name: "Widowed", type: 1 },
      ],
      isSpermRes: [
        { name: "Yes", type: 1 },
        { name: "No", type: 0 },
      ],
      cumCanada: [
        { name: "Yes", type: 1 },
        { name: "No", type: 0 },
      ],
      thirdOptions: [
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
      ],
      fourOptions: [
        {
          name: "Less than secondary school (high school)",
          withSpouse: 0,
          withoutSpouse: 0,
        },
        {
          name: "Secondary diploma (high school graduation",
          withSpouse: 28,
          withoutSpoue: 30,
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
      ],

      fiveOptions: [
        { name: "Yes", type: 1 },
        { name: "No", type: 0 },
      ],
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
      ],
      sevenOptions: [
        { name: "Yes", type: 1 },
        { name: "No", type: 0 },
      ],
      eightOptions: [
        {
          name: "CELPIP-G",
          type: "A",
          options: [
            {
              type: "speaking",
              values: [
                { val: "10-12", withspouse: 32, withOutSpouse: 34 },
                { val: "9", withspouse: 29, withOutSpouse: 31 },
                { val: "8", withspouse: 22, withOutSpouse: 23 },
                { val: "7", withspouse: 16, withOutSpouse: 17 },
                { val: "6", withspouse: 8, withOutSpouse: 9 },
                { val: "5", withspouse: 6, withOutSpouse: 6 },
                { val: "4", withspouse: 6, withOutSpouse: 6 },
                { val: "M, 0-3", withspouse: 0, withOutSpouse: 0 },
              ],
            },
            {
              type: "Listening",
              values: [
                { val: "10-12", withspouse: 32, withOutSpouse: 34 },
                { val: "9", withspouse: 29, withOutSpouse: 31 },
                { val: "8", withspouse: 22, withOutSpouse: 23 },
                { val: "7", withspouse: 16, withOutSpouse: 17 },
                { val: "6", withspouse: 8, withOutSpouse: 9 },

                { val: "5", withspouse: 6, withOutSpouse: 6 },

                { val: "4", withspouse: 6, withOutSpouse: 6 },

                { val: "M, 0-3", withspouse: 0, withOutSpouse: 0 },
              ],
            },
            {
              type: "Reading",
              values: [
                { val: "10-12", withspouse: 32, withOutSpouse: 34 },
                { val: "9", withspouse: 29, withOutSpouse: 31 },
                { val: "8", withspouse: 22, withOutSpouse: 23 },
                { val: "7", withspouse: 16, withOutSpouse: 17 },
                { val: "6", withspouse: 8, withOutSpouse: 9 },
                { val: "5", withspouse: 6, withOutSpouse: 6 },
                { val: "4", withspouse: 6, withOutSpouse: 6 },
                { val: "M, 0-3", withspouse: 0, withOutSpouse: 0 },
              ],
            },
            {
              type: "Writing",
              values: [
                { val: "10-12", withspouse: 32, withOutSpouse: 34 },
                { val: "9", withspouse: 29, withOutSpouse: 31 },
                { val: "8", withspouse: 22, withOutSpouse: 23 },
                { val: "7", withspouse: 16, withOutSpouse: 17 },
                { val: "6", withspouse: 8, withOutSpouse: 9 },

                { val: "5", withspouse: 6, withOutSpouse: 6 },

                { val: "4", withspouse: 6, withOutSpouse: 6 },

                { val: "M, 0-3", withspouse: 0, withOutSpouse: 0 },
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
      ],
      nineOptions: [],
      tenOptions: [],
      elevenOptions: [],
      twelveOptions: [
        { name: "None or less than a year", withSpouse: 0, withoutSpouse: 0 },
        { name: "1 year", withSpouse:  35, withoutSpouse: 40 },
        { name: "2 years", withSpouse: 46, withoutSpouse: 53 },
        { name: "3 years", withSpouse: 56, withoutSpouse: 64 },
        { name: "4 years", withSpouse: 63, withoutSpouse: 72 },
        { name: "5 years or mores", withSpouse: 70, withoutSpouse: 80 },
      ],
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
      ],
      fourteenOptions: [
        { name: "Yes", type: 1 , plusFive: 25, plusSeven:30},
        { name: "No", type: 0, plusFive: 0, plusSeven:0 },
      ],
      fifteenOptions: [
        { name: "Yes", type: 1 },
        { name: "No", type: 0 },
      ],
      sixteenOptions: [
        { name: "Yes", type: 1 },
        { name: "No", type: 0 },
      ],
      seventeenOptions: [
        { name: "Yes", type: 1 },
        { name: "No", type: 0 },
      ],
      totalScore: [],
      typeWithSpoWithoutSpou: null,
    };
  }

  handleChange = (e) => {
    let value = e.target.value;

    if (value === "0") {
      this.setState({ showQues2: true, typeWithSpoWithoutSpou: value });
    } else if (value === "1") {
      this.setState({
        showQues2: false,
        showSperm: false,
        showThree: true,
        typeWithSpoWithoutSpou: value,
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
  changeThird = (e) => {
    let value = e.target.value;
    let { totalScore } = this.state;
    if (value === "none") {
      this.setState({ showFour: false });
    } else {
      let obj = {
        question: "thirdOptions",
        answer: value,
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
  handleFourChange = (e) => {
    let value = e.target.value;
    let { totalScore } = this.state;
    if (value === "none") {
      this.setState({ showFive: false });
    } else {
      let obj = {
        question: "fourOptions",
        answer: value,
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
  handleFiveChange = (e) => {
    let value = e.target.value;
    if (value === "1") {
      this.setState({ showSix: true, showSeven: false });
    } else {
      this.setState({ showSeven: true, showSix: false });
    }
  };
  handleSixChange = (e) => {
    let value = e.target.value;
    let { totalScore } = this.state;
    if (value === "none") {
      this.setState({ showSeven: false });
    } else {
      let obj = {
        question: "sixOptions",
        answer: value,
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
  handleEightChange = (e) => {
    let { eightOptions } = this.state;

    if (e.target.value !== undefined) {
      let value = e.target.value;

      this.setState({
        showNine: true,

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
          { question: questionName, answer: obj.answer, type:"firstOffLang" },
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
    let { eightOptions } = this.state;
    let value = e.target.value;
    if (value === "A" || value === "B" || value === "C" || value === "D") {
      this.setState({
        showEleven: true,
        showTwelve: false,
        elevenOptions: eightOptions.filter((data) => data.type === value),
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
      answer: e.target.value
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

  handleTwelveChange = (e) => {
    let value = e.target.value;
    let { totalScore } = this.state;
    if (value === "none") {
      this.setState({ showThirteen: false });
    } else {
      let obj = {
        question: "twelveOptions",
        answer: value,
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
  handleThirteenChange = (e) => {
    let value = e.target.value;
    let { totalScore } = this.state;
    if (value === "none") {
      this.setState({ showFourteen: false });
    } else {
      let obj = {
        question: "thirteenOptions",
        answer: value,
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
  handleFourteenChange = (e) => {
    let value = e.target.value;
    let { totalScore } = this.state;
    if (value === "none") {
      this.setState({ showFifteen: false });
    } else {
      let obj = {
        question: "fourteenOptions",
        answer: value,
      };
      if (totalScore.length > 0) {
        let isFound = totalScore.filter((ele) => ele.question !== obj.question);
        this.setState({
          totalScore: [...isFound, obj],
          showFifteen: true,
        });
      } else {
        this.setState({
          totalScore: [...totalScore, obj],
          showFifteen: true,
        });
      }
    }
  };
  handleFifteenChange = (e) => {
    if (e.target.value !== "0") {
      this.setState({
        showSixteen: true,
      });
    } else {
      this.setState({
        showSixteen: false,
      });
    }
  };
  handleSixteenChange = (e) => {
    if (e.target.value !== "0") {
      this.setState({
        showSeventeen: true,
      });
    } else {
      this.setState({
        showSeventeen: false,
      });
    }
  };
  handleSeventeenChnage = (e) => {};
  render() {
    let {
      martialStatus,
      showQues2,
      isSpermRes,
      showSperm,
      cumCanada,
      showThree,
      thirdOptions,
      showFour,
      fourOptions,
      fiveOptions,
      sixOptions,
      sevenOptions,
      eightOptions,
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
      showSixteen,
      showSeventeen,
      tenOptions,
      elevenOptions,
      twelveOptions,
      firstOffLang,
      secOffLang,
      thirteenOptions,
      fourteenOptions,
      fifteenOptions,
      sixteenOptions,
      seventeenOptions,
    } = this.state;
    let nineOp = nineOptions[0];

    console.log(this.state.totalScore);
    return (
      <div className="container   p-3">
        <div className="d-flex custom-class">
          <div>What is your marital status?</div>
          <select onChange={this.handleChange}>
            <option default>Select Status</option>
            {martialStatus.map((ele, key) => {
              return (
                <option key={key} value={ele.type}>
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
              3) How old are you? Choose the best answer: If you’ve been invited
              to apply, enter your age on the date you were invited. OR If you
              plan to complete an Express Entry profile, enter your current age.
            </div>
            <select onChange={(e) => this.changeThird(e)}>
              <option value="none">Please Select</option>
              {thirdOptions.map((ele, key) => {
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
              4) What is your level of education? Enter the highest level of
              education for which you: earned a Canadian degree, diploma or
              certificate or had an Educational Credential Assessment (ECA) if
              you did your study outside Canada. (ECAs must be from an approved
              agency, in the last five years) Note: a Canadian degree, diploma
              or certificate must either have been earned at an accredited
              Canadian university, college, trade or technical school, or other
              institute in Canada. Distance learning counts for education
              points, but not for bonus points in your profile or application.
            </div>
            <select onChange={this.handleFourChange}>
              <option value="none">Please Select</option>
              {fourOptions.map((ele, key) => {
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
              5) Have you earned a Canadian degree, diploma or certificate?
              Note: to answer yes: English or French as a Second Language must
              not have made up more than half your study you must not have
              studied under an award that required you to return to your home
              country after graduation to apply your skills and knowledge you
              must have studied at a school within Canada (foreign campuses
              don’t count) you had to be enrolled full time for at least eight
              months, and have been physically present in Canada for at least
              eight months
            </div>
            <select onChange={this.handleFiveChange}>
              <option>Please Select</option>
              {fiveOptions.map((ele, key) => {
                return (
                  <option key={key} value={ele.type}>
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
              Choose the best answer to describe this level of education.
            </div>

            <select onChange={this.handleSixChange}>
              <option value="none">Please Select</option>
              {sixOptions.map((ele, key) => {
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
            <div>
              Official languages: Canada's' official languages are English and
              French. You need to submit language test results that are less
              than two years old for all programs under Express Entry, even if
              English or French is your first language.
            </div>
            <div>Are your test results less than two years old?</div>
            <select onChange={this.handleSevenChange}>
              <option>Please Select</option>
              {sevenOptions.map((ele, key) => {
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
                Which language test did you take for your first official
                language?
              </div>
              <select onChange={this.handleEightChange}>
                <option>Please Select</option>
                {eightOptions.map((ele, key) => {
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
                  Work Experience In the last ten years, how many years of
                  skilled work experience in Canada do you have?
                </div>
                <select onChange={this.handleTwelveChange}>
                  <option value="none">Select</option>

                  {twelveOptions.map((data, key) => {
                    return <option key={key} value={key}>{data.name}</option>;
                  })}
                </select>
              </div>
            ) : null}

            {showThirteen ? (
              <div className="d-flex custom-class">
                <div>
                  In the last 10 years, how many total years of foreign skilled
                  work experience do you have?
                </div>
                <select onChange={(e) => this.handleThirteenChange(e)}>
                  <option value="none">Select</option>
                  {thirteenOptions.map((ele, key) => {
                    return <option key={key} value={key}> {ele.name}</option>;
                  })}
                </select>
              </div>
            ) : null}

            {showFourteen ? (
              <div className="d-flex custom-class">
                <div>
                  Do you have a certificate of qualification from a Canadian
                  province, territory or federal body?
                </div>
                <select onChange={this.handleFourteenChange}>
                  <option value="none">Select</option>
                  {fourteenOptions.map((ele, key) => {
                    return <option key={key} value={key}> {ele.name}</option>;
                  })}
                </select>
              </div>
            ) : null}
            {showFifteen ? (
              <div className="d-flex custom-class">
                <div>
                  Do you have a valid job offer supported by a Labour Market
                  Impact Assessment (if needed)?
                </div>
                <select onChange={this.handleFifteenChange}>
                  <option value={0}>Select</option>
                  {fifteenOptions.map((ele, key) => {
                    return <option key={key}>{ele.name}</option>;
                  })}
                </select>
              </div>
            ) : null}
            {showSixteen ? (
              <div className="d-flex custom-class">
                <div>
                  Do you have a nomination certificate from a province or
                  territory?
                </div>
                <select onChange={this.handleSixteenChange}>
                  <option value={0}>Select</option>
                  {sixteenOptions.map((ele, key) => {
                    return <option key={key}>{ele.name}</option>;
                  })}
                </select>
              </div>
            ) : null}

            {showSeventeen ? (
              <div className="d-flex custom-class">
                <div>
                  Do you or your spouse or common law partner (if they will come
                  with you to Canada) have at least one brother or sister living
                  in Canada who is a citizen or permanent resident?
                </div>
                <select onChange={this.handleSeventeenChnage}>
                  <option value={0}>Select</option>
                  {seventeenOptions.map((ele, key) => {
                    return <option key={key}>{ele.name}</option>;
                  })}
                </select>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}

export default CrsCalculator;
