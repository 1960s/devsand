

let rawcodeHTML = []
let newcode = []

//single quotes for value because attributes are in double quotations in the html-var.js

function htmlGen() {
	
	
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



// duplicate elements are marked by a $ and replaced with blank space
htmlCode.innerHTML = rawcodeHTML.join("").replace(/\$/g, "")


	
}	


/*

<div class="dropdown">
<button draggable="true" class=" button drag" value="<del>delete</del>">&lt;del&gt;</button>
<div class="dropdown-content">
<button draggable="true" class="column button drag" value=" cite=&#34;addresshere&#34;">cite=""</button> 
<button draggable="true" class="column button drag" value=" datetime=&#34;timehere&#34;">datetime=""</button> 
</div>
</div> 

*/















