let cssCode = document.getElementById("cssCode")

let tabsCode = []
let rawcodeHTML = []
let rawcode = []
let beggar
let tester = []
let recurLength = 3

function cssGen() {
	
//tabs generation   
tabsCode.push(`
<div class="tab">
`)
	
    for (let [tabs, module] of Object.entries(category)) {
tabsCode.push(`
<button  class="tablinks" onclick="openCity(event, '${tabs}')">${tabs}</button>
`)
    }
	
tabsCode.push(`
</div>
`)






	
	//tabs categories
  let categoryHtml = {
	"HTML": [
"metadata",
"sections",
"resource",
"semantics",
"multimedia",
"lists",
"embedded",
    ],

    "FORMS": [
"forms",
"input",
"input-attributes",
"global",
    ],
  }
  

  

  let code = document.getElementById("code")
  
/*
for (let [namer, lister] of Object.entries(grouper)) {
	newcode.push(`${namer}<br>`)
	
}
*/



//tab categories
    for (let [tabs, module] of Object.entries(categoryHtml)) {
		
		rawcodeHTML.push(`<div id="${tabs}" class="tabcontent">`)





  //property object
  for (let [namer, lister] of Object.entries(grouper)) {
	  
	  
	  for (let pq = 0; pq < module.length; pq++) {
		  
		  if (namer == module[pq]){
			  
			  
			  
    rawcodeHTML.push(`
<div class="boxes">
<div class="centerMe">${namer}</div> 
`)







    for (let [namer2, none] of Object.entries(lister)) {

      rawcodeHTML.push(`
<div class="columnrows">
<span>${namer2}</span>
`)
      rawcodeHTML.push(`<br>`)

      for (let [key, value] of Object.entries(big)) {
      

         //this is for input attributes and global attributes
        if (namer2 == value.subgroup) {


         if (value.attributes.length == 0) {
			  
            rawcodeHTML.push(`<button draggable="true" class=" button drag" value='${value.value}'>${key}</button>`)
			
            rawcodeHTML.push(`<br>`)
          }



          else {
            rawcodeHTML.push(`
          <div class="dropdown">
          `)

            rawcodeHTML.push(`
          <button draggable="true" class=" button drag" value='${value.value}'>${key}</button>
          `)
            rawcodeHTML.push(`
          <div class="dropdown-content">
          `)


            for (let i = 0; i < value.attributes.length; i++) {

              for (let [one, two] of Object.entries(attributes)) {

                if (value.attributes[i] == one) {

                  rawcodeHTML.push(`<div class="columnrows">`)

                  for (let j = 0; j < two.values.length; j++) {

                    if (two.group == "boolean") {//condtional is for boolean attributes, should put in group boolean instead
                      rawcodeHTML.push(`
		<button draggable="true" class="column button drag" value=' ${one}'>
		${one}</button>
			  `)
                    }

                    else {
                      rawcodeHTML.push(`
		<button draggable="true" class="column button drag" value=' ${one}${two.values[j]}'>
		${one}${two.values[j]}</button>
			  `)
                    }
                    rawcodeHTML.push(`<br>`)
                  }

                  rawcodeHTML.push(`</div >`)

                }

              }

            }



            rawcodeHTML.push(`
</div >
</div > 
          `)
            rawcodeHTML.push(`<br>`)


          }


        }

      }
      rawcodeHTML.push(`
</div >
          `)

    }




           
    rawcodeHTML.push(`
</div >
          `)




  }
			  
			  
			  
			  
			  
			  
		  }
		  
	  }
	  



rawcodeHTML.push(`</div>`)

	}




	

//css button generation
	
	//tabs content 
    for (let [tabs, module] of Object.entries(category)) {

		rawcode.push(`<div id="${tabs}" class="tabcontent">`)
		
		//module categories
		for (let i = 0; i < module.length; i++) {
			
			rawcode.push(`
<div class="boxes">
<div class="centerMe">${module[i]}</div>
<div class="columnrows">
`)
			
			
				//property object
			    for (let [tag, data] of Object.entries(property)) {
					 if (data.groups.includes(module[i])) {
		
						 beggar = ""

                        for (let i = 0; i < shorthand.length; i++) {
                            if (tag == shorthand[i]) {
                                beggar += "shorthand"
                            }
                        }

                        for (let i = 0; i < longhand.length; i++) {
                            if (tag == longhand[i]) {
                                beggar += "longhand"
                            }

                        }

                        if (beggar == "shorthand") {
                            rawcode.push(dropdown(tag, "orange"))
                        } else if (beggar == "longhand") {
                            rawcode.push(dropdown(tag, "pink"))
                        } else if (beggar == "shorthandlonghand") {
                            rawcode.push(dropdown(tag, "green"))
                        } else {
                            rawcode.push(dropdown(tag,))
                        }
			 

						 //syntax level 1
						 let syntax1 = syntaxArray(data.syntax)
						 for (let j = 0; j < syntax1.length; j++) {
							 
							 //syntax level 2
							 let syntax2 = protectMe(syntax1[j]).filter(el => el != " ")
							 for (let k = 0; k < syntax2.length; k++) {
								 

										//syntax object
										let finder = false
										let syntaxRevert = sherry(syntax2[k])
										
                                        for (let [synTag, synData] of Object.entries(syntax))  {
											
                                            if (`<${synTag}>` == syntaxRevert) {
                                                finder = true
												
												
												if (syntax2.length <= 2){
													rawcode.push(dropdown2(syntaxRevert, "lightblue"))
													
													}
												
												else{
													
													rawcode.push(dropbot2(syntaxRevert, "lightblue"))
												}
												
                                                    

												
													//syntax level 3
                                                    let syntaxRecur1 = syntaxArray(synData.syntax)
                                                    for (let l = 0; l < syntaxRecur1.length; l++) {

														//syntax level 4
                                                        let syntaxRecur2 = protectMe(syntaxRecur1[l]).filter(el => el != " ")
                                                        for (let m = 0; m < syntaxRecur2.length; m++) {

															//finds empty buttons
                                                                if (syntaxRecur2[m] == " ") {
																
																}
															
															//value definition of syntax, everything that is not a button
                                                                else if (syn.test(syntaxRecur2[m]) || Number.isInteger(+syntaxRecur2[m])) {
                                                                    rawcode.push(`<span class="gummy">${syntaxRecur2[m]}</span>`)
                                                                } 
															
															//the rest are buttons
															else {
																
																recursion(syntaxRecur2[m], 9, syntaxRecur2.length)
                                                                    
                                                                }

                                                            }
                                                            rawcode.push("<br>")

                                                    }

                                                    rawcode.push(`</span></span>`)

                                            }

                                        }
								 
								 		for (let [synTag, synData] of Object.entries(property))  {
											
                                            if ( `<'${synTag}'>` == syntaxRevert) {
                                                finder = true
												
												if (syntax2.length <= 2){
													rawcode.push(dropdown2(syntaxRevert, "lightcoral"))
													
													}
												
												else{
													rawcode.push(dropbot2(syntaxRevert, "lightcoral"))
													
												}
												
											

												
													//syntax level 3
                                                    let syntaxRecur1 = syntaxArray(synData.syntax)
                                                    for (let l = 0; l < syntaxRecur1.length; l++) {

														//syntax level 4
                                                        let syntaxRecur2 = protectMe(syntaxRecur1[l])
                                                        for (let m = 0; m < syntaxRecur2.length; m++) {

															//finds empty buttons
                                                                if (syntaxRecur2[m] == " ") {
																
																}
															
															//value definition of syntax, everything that is not a button
                                                                else if (syn.test(syntaxRecur2[m]) || Number.isInteger(+syntaxRecur2[m])) {
                                                                    rawcode.push(`<span class="gummy">${syntaxRecur2[m]}</span>`)
                                                                } 
															
															//the rest are buttons
															else {
																
																recursion(syntaxRecur2[m], 9, syntaxRecur2.length)
                                                                    
                                                                }

                                                            }
                                                            rawcode.push("<br>")

                                                    }

                                                    rawcode.push(`</span></span>`)

                                            }

                                        }
								 
								 
								 
								 
								 
								  //finds empty buttons
								  if (syntax2[k] == " ") {
								  
								  }
								 
								  //value definition of syntax, everything that is not a button
								  else if (syn.test(syntax2[k]) || Number.isInteger(+syntax2[k])) {
									rawcode.push(`<span class="gummy">${syntax2[k]}</span>`)
								  } 
								 
								  //the rest are buttons
								  else if (!finder){
									rawcode.push(htmlRead2(syntax2[k]))
								  }
								 
								 
							 }
							 
							 rawcode.push("<br>")
							 
						 }
  
rawcode.push(`
</span>
</span>
<br>`)	
						 
						 
						 
						 
						 
						 
					 }
				}
			
			
			
rawcode.push(`
</div>
</div>
`)			
		}
		
		rawcode.push(`</div>`)
    }

	
	cssCode.innerHTML =  tabsCode.join("") + rawcodeHTML.join("").replace(/\$/g, "") + rawcode.join("")
}

