// המשתמש צריך למדוד כל יום את הטמפרטורה בחוץ ולדווח עליה למערכת. 
// כתבו קטע קוד שעוזר למשתמש למצוא שגיאות במדידה באופן הבא: 
// תחילה נשאל את המשתמש עבור כמה ימים הוא צריך לדווח (בכל יום מדידה אחת)
// לאחר מכן נבדוק אם המדידה גדולה או קטנה ב20 מעלות מממוצע המדידות שנאספו עד כה. 
// במידה והמדידה חשודה כחריגה נשאל את המשתמש האם הוא רוצה להכניס אותה לממוצע המדידות. 
// מדידה שלא חורגת נכנסת לממוצע המדידות באופן אוטומטי.  
// לבסוף יש להדפיס את ממוצע המדידות. 
// אם נשאר לכם זמן בדקו גם את תקינות הקלט מהמשתמש.

let dayes = prompt('כמה ימים תארך המדידה?')
let sum = 0
let average = sum / dayes


for (i = 0; i < dayes; i++) {
    let temp = prompt('הכנס טמפרטורה יומית:')
    let sd = Number(temp) - average

    if (sd <= -20 || sd >= 20) {
        let excep = prompt('ישנה חריגה מעל 20 מהממוצע האם תרצה להכניס את המדידה לממוצע המחושב? (כן או לא)')
        if (excep == 'כן') {
            sum += temp
            console.log ('המדידה תכנס לממוצע')
           } else if (excep == 'לא') {
            console.log ('המדידה לא תכנס לממוצע')
            } else {
                prompt ('אנא הכנס תשובה של "כן" או "לא"')
                
            }
            
        } else {
            sum += temp
            console.log ('המדידה נכנסה לממוצע המדידות') 
        }
}
console.log ("ממוצע המדידות עד היום: " + average)

