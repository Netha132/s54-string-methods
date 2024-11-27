import React from 'react'

function StringMethods() {

   
  return (
    <div className='methodsDiv'>
        <h1 style={{color:"#fff"}}>StringMethods</h1>

        <div className='strMethods'>
        {/* toUpperCase */}
      <button type='button' onClick={()=>{
         let build="To create a production build, use npm run build."
        console.log(`toUpperCase: ${build.toUpperCase()}`);
      }}>toUpperCase</button>

      {/* toLowerCase */}
      <button type='button' onClick={()=>{
         console.clear()
        let build="TO CREATE A PRODUCTION BUILD, USE NPM RUN BUILD."
        console.log(`toLowerCase: ${build.toLowerCase()}`);
      }}>toLowerCase</button>

      {/* concat */}
      <button type='button' onClick={()=>{
         console.clear()
        let firstName="Narendra ";
        let middleName="DamodarDas"
        let lastName=" Modi";
        let fullName=firstName.concat(middleName,lastName);

        // console.log(`${firstName} ${middleName} ${lastName}`)
        console.log(`concat: ${fullName}`);
      }}>concat</button>

        {/* Trim */}
      <button type='button' onClick={()=>{
         console.clear()
        let fullName="   Narendra Modi    "
        console.log(`==${fullName}==`)
        console.log(`trim: ===${fullName.trim()}===`);
      }}>Trim</button>

      {/* {trimStart} */}
      <button type='button' onClick={()=>{
         console.clear()
         let fullName="    Narendra Modi    "
         console.log(`trimStart: ===${fullName.trimStart()}===`);
      }}>TrimStart</button>

      {/* trimEnd */}
      <button type='button' onClick={()=>{
         console.clear()
         let fullName="    Narendra Modi    "
         console.log(`trimEnd: ===${fullName.trimEnd()}===`);
      }}>TrimEnd</button>

      {/* padstart */}
      <button type='button' onClick={()=>{
         console.clear()
        let str="01"
        console.log(`padStart: ${str.padStart(100,"100")}`)
      }}>Padstart</button>

      {/* padEnd */}
      <button type='button' onClick={()=>{
         console.clear()
        let str="00"
        console.log(`padEnd: ${str.padEnd(100,"010 ")}`);
      }}>PadEnd</button>

      {/* repeat */}
      <button type='button' onClick={()=>{
         console.clear()
        let krishanaSloka="Jai Shri Krishna,";
        console.log(`Repeat: ${krishanaSloka.repeat(108)}`);
      }}>Repeat</button>

      {/* replace */}
      <button type='button' onClick={()=>{
         console.clear()
        let sloka="Hare Krishna Hare Krishna Krishna Krishna Hare Hare";
        console.log(`Replace: ${sloka.replace("Krishna","Rama")}`);
      }}>Replace</button>

      {/* replaceAll */}
      <button type='button' onClick={()=>{
         console.clear()
         let sloka="Hare Krishna Hare Krishna Krishna Krishna Hare Hare";
         console.log(`replaceAll: ${sloka.replaceAll("Krishna","Rama")}`);
      }}>ReplaceAll</button>

      {/* split */}
      <button type='button' onClick={()=>{
         console.clear()
         let sloka="Hare Krishna Hare Krishna Krishna Krishna Hare Hare";
         console.log(`split: ${sloka.split(",")}`);
      }}>Split</button>

      {/* slice */}
      <button type='button' onClick={()=>{
         console.clear()
        let number="01234567891011121314151617181920";
        console.log(`slice: ${number.slice(5,10)}`);
      }}>Slice</button>

      {/* substring */}
      <button type='button' onClick={()=>{
         let number="01234567891011121314151617181920";
         console.clear()
         console.log(`subString: ${number.substring(5,10)}`);
      }}>SubString</button>

      {/* substr */}
      <button type='button' onClick={()=>{
         let number="01234567891011121314151617181920";
         console.clear()
         console.log(`subStr: ${number.substr(5,10)}`);
      }}>SubStr</button>

      {/* length,at,charAt */}
      <button type='button' onClick={()=>{
        let alphabets="abcdefghijklmnopqrstuvwxyz"
        console.clear()
        console.log(`length: ${alphabets.length}`);
        console.log(`At: ${alphabets.at(5)}`);
        console.log(`charAt: ${alphabets.charAt(4)}`);
      }}>Length/at/charAt</button>


      {/* charCodeAt */}
      <button type='button' onClick={()=>{
         console.clear()
        let alphabets="abcdefghijklmnopqrstuvwxyz అఆఇఈఉఊఋఎఏఐఒఓఔఅంఅఃకఖగఘఙచఛజఝఞటఠడఢణతథదధనపఫబభమయరలవశషసహళక్షఱ ~!@#$%^&*()_+{";
        for(let i=0;i<alphabets.length;i++){
           
            console.log(`charCodeAt: ${alphabets.charAt(i)}-->${alphabets.charCodeAt(i)}`)
        }
      }}>charCodeAt</button>


      {/* fromCharCode */}
      <button type='button' onClick={()=>{
      console.clear()
        for(let i=3077;i<3200;i++){
        console.log(`fromCharCode: ${String.fromCharCode(i)}`)}
      }}>fromCharCode</button>

        {/* endsWith */}
      <button type='button' onClick={()=>{
      console.clear()
        let word="Jai Shri Ram";
        console.log(`startWith: ${word.startsWith("Jai")}`)
        console.log(`endWith: ${word.endsWith("Ram")}`);
      }}>endsWith/startsWith</button>

        {/* includes */}
      <button type='button' onClick={()=>{
        let word="Jai Shri Ram";
        console.log(`Includes: ${word.includes("Shri")}`);
      }}>Includes</button>

      {/* indexOf */}
      <button type='button' onClick={()=>{
          let build="To create a production build, use npm run build."
          console.log(`indexOf: ${build.indexOf("a",10)}`)
      }}>indexOf</button>

      {/* lastIndexOf */}
      <button type='button' onClick={()=>{
        let build="To create a production build, use npm run build."
        console.log(`lastIndexOf:${build.lastIndexOf("a")}`)
      }}>lastIndexOf</button>

      {/* Match */}
      <button type='button' onClick={()=>{
          let build="To create a production BUILD, use npm run build."
          console.log(`Match: ${build.match("i")}`)
          console.log(`Match: ${build.match(/i/g)}`);
          console.log(`Match: ${build.match(/i/gi)}`);
      }}>Match</button>

      {/* Search */}
      <button type='button' onClick={()=>{
         let build="To create a production BUILD, use npm run build."
         console.log(`Search: ${build.search(/BUILD/i)}`)
         console.log(`Search: ${build.search("build")}`)
      }}>Search</button>

        </div>
    </div>
  )
}

export default StringMethods
