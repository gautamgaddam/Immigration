import React, { Component } from "react";

class CrsCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSperm: false,
      showQues2: false,
      showThree: false,
      showFour: false,
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
      fourOptions:[
        {name:"Less than secondary school (high school)",	withSpouse:0, withoutSpouse:0},
        {name:"Secondary diploma (high school graduation",	withSpouse:28, 	withoutSpoue:30},
        {name:"One-year degree, diploma or certificate from a university, college, trade or technical school, or other institute:",	withSpouse:84, 	withoutSpouse:90},
        {name:"Two-year program at a university, college, trade or technical school, or other institute", 	withSpouse:	91, 	withoutSpouse:	98},
        {name:"Bachelor’s degree OR a three or more year program at a university, college, trade or technical school, or other institute",	withSpouse:112,	withoutSpouse:120},
        {name:"Two or more certificates, diplomas, or degrees. One must be for a program of three or more years",	withSpouse:119, withoutSpouse:128},
        {name:"Master’s degree, OR professional degree needed to practice in a licensed profession (For “professional degree,” the degree program must have been in: medicine, veterinary medicine, dentistry, optometry, law, chiropractic medicine, or pharmacy.)", 	withSpouse:126, withoutSpouse:135},
        {name:"Doctoral level university degree (Ph.D.)",	withSpouse:140, withoutSpouse:150}
      ],
      fiveOptions:[
        { name: "Yes", type: 1 },
        { name: "No", type: 0 },
      ]
    };
  }

  handleChange = (e) => {
    let value = e.target.value;

    if (value === "0") {
      this.setState({ showQues2: true });
    } else if (value === "1") {
      this.setState({ showQues2: false, showSperm: false, showThree: true });
    } else {
      this.setState({ showQues2: false, showSperm: false, showThree: false });
    }
  };
  handleSpermChange = (e) => {
    let value = e.target.value;

    if (value === "1") {
      this.setState({ showSperm: true, });
    } else {
      this.setState({ showSperm: false, showThree: true });
    }
  };
  changeThird = (e) => {
      let value= e.target.value;
      if(value === "0"){
        this.setState({ showFour: false });
      }else{
        this.setState({ showFour: true });
      }
   
  };
  handleFiveChange=(e)=>{
    let value= e.target.value;
    if(value === "0"){
      this.setState({ showFive: false });
    }else{
      this.setState({ showFive: true });
    }
  }

  render() {
    const {
      martialStatus,
      showQues2,
      isSpermRes,
      showSperm,
      cumCanada,
      showThree,
      thirdOptions,
      showFour,
      fourOptions,
      fiveOptions
    } = this.state;
    return (
      <div>
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

        {showQues2 ? (
          <div>
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
          <div>
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
          <div>
            <div>
              3) How old are you? Choose the best answer: If you’ve been invited
              to apply, enter your age on the date you were invited. OR If you
              plan to complete an Express Entry profile, enter your current age.
            </div>
            <select onChange={(e)=>this.changeThird(e)}>
              <option value={0}>Please Select</option>
              {thirdOptions.map((ele, key) => {
                return <option key={key}>{ele.name}</option>;
              })}
            </select>
          </div>
        ) : null}
        {showFour ? (
          <div>
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
            <option >Please Select</option>
            {
             fourOptions.map((ele, key)=>{
                return (<option key={key} >{ele.name.slice(0, 50)}</option>) 
             })}

        
        
         </select>
            </div>
        ) : null}



        {
            <div>
            <div>
            
            5) Have you earned a Canadian degree, diploma or certificate?
Note: to answer yes:

English or French as a Second Language must not have made up more than half your study
you must not have studied under an award that required you to return to your home country after graduation to apply your skills and knowledge
you must have studied at a school within Canada (foreign campuses don’t count)
you had to be enrolled full time for at least eight months, and have been physically present in Canada for at least eight months
            </div>

            
            

            <select onChange={this.handleFiveChange}>
            <option >Please Select</option>
            {fiveOptions.map((ele, key) => {
                return (
                  <option key={key} value={ele.type}>
                    {ele.name}
                  </option>
                );
              })}
            </select>
            </div>
        }
      </div>
    );
  }
}

export default CrsCalculator;
