

let rawcode = []
let newcode = []

//single quotes for value because attributes are in double quotations in the html-var.js

function buttonGen() {
	
	
	//tabs categories
  let category = {
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
  
  //tabs generation   
  
rawcode.push(`
<div class="tab">
`)
	
    for (let [tabs, module] of Object.entries(category)) {
rawcode.push(`
<button  class="tablinks" onclick="openCity(event, '${tabs}')">${tabs}</button>
`)
    }
	
rawcode.push(`
</div>
`)

/*
for (let [namer, lister] of Object.entries(grouper)) {
	newcode.push(`${namer}<br>`)
	
}
*/



//tab categories
    for (let [tabs, module] of Object.entries(category)) {
		
		rawcode.push(`<div id="${tabs}" class="tabcontent">`)





  //property object
  for (let [namer, lister] of Object.entries(grouper)) {
	  
	  
	  for (let pq = 0; pq < module.length; pq++) {
		  
		  if (namer == module[pq]){
			  
			  
			  
    rawcode.push(`
<div class="boxes">
<div class="centerMe">${namer}</div> 
`)







    for (let [namer2, none] of Object.entries(lister)) {

      rawcode.push(`
<div class="columnrows">
<span>${namer2}</span>
`)
      rawcode.push(`<br>`)

      for (let [key, value] of Object.entries(big)) {
      

         //this is for input attributes and global attributes
        if (namer2 == value.subgroup) {


         if (value.attributes.length == 0) {
			  
            rawcode.push(`<button draggable="true" class=" button drag" value='${value.value}'>${key}</button>`)
			
            rawcode.push(`<br>`)
          }



          else {
            rawcode.push(`
          <div class="dropdown">
          `)

            rawcode.push(`
          <button draggable="true" class=" button drag" value='${value.value}'>${key}</button>
          `)
            rawcode.push(`
          <div class="dropdown-content">
          `)


            for (let i = 0; i < value.attributes.length; i++) {

              for (let [one, two] of Object.entries(attributes)) {

                if (value.attributes[i] == one) {

                  rawcode.push(`<div class="columnrows">`)

                  for (let j = 0; j < two.values.length; j++) {

                    if (two.group == "boolean") {//condtional is for boolean attributes, should put in group boolean instead
                      rawcode.push(`
		<button draggable="true" class="column button drag" value=' ${one}'>
		${one}</button>
			  `)
                    }

                    else {
                      rawcode.push(`
		<button draggable="true" class="column button drag" value=' ${one}${two.values[j]}'>
		${one}${two.values[j]}</button>
			  `)
                    }
                    rawcode.push(`<br>`)
                  }

                  rawcode.push(`</div >`)

                }

              }

            }



            rawcode.push(`
</div >
</div > 
          `)
            rawcode.push(`<br>`)


          }


        }

      }
      rawcode.push(`
</div >
          `)

    }




           
    rawcode.push(`
</div >
          `)




  }
			  
			  
			  
			  
			  
			  
		  }
		  
	  }
	  



rawcode.push(`</div>`)

	}



// duplicate elements are marked by a $ and replaced with blank space
code.innerHTML = rawcode.join("").replace(/\$/g, "") + newcode.join("")


	
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















