/**
 * Utility file for getting Soulfit Data from Google Sheets.
 *
 * Usage:
 *     1. You will need to include an HTML script whose src is "https://spreadsheets.google.com/feeds/list/1zWeJSlmhone9MzwoUNxCFzBIySOMEo8OoGhClgZLGS4/default/public/values?alt=json-in-script&callback=sanitizeSoulfitDataJSON"
 *     2. If you wish to simply display the formatted JSON data, just create a div/span/pre whose id is "result"
 */
function int(str) {
    return (str == "") ? 0 : parseInt(str);
}

function sanitizeSoulfitDataJSON(soulfitData) {
    rows = soulfitData["feed"]["entry"]
    jsonData = []
    for (row in rows) {
        var entry = {}
        entry["timestamp"] = rows[row]["gsx$timestamp"]["$t"]
        entry["gender"] = rows[row]["gsx$brotherorsister"]["$t"].replace("[0-9]", "").toLowerCase()
        entry["name"] = rows[row]["gsx$name"]["$t"].replace("[0-9]", "")
        entry["pages"] = int(rows[row]["gsx$howmanypagesofyourbookdidyouread"]["$t"].replace(/\D/g, ""))
        entry["chapters"] = int(rows[row]["gsx$howmanychaptersofthebibledidyouread"]["$t"].replace(/\D/, ""))
        entry["running"] = int(rows[row]["gsx$howmanyminutesdidyourun"]["$t"].replace(/\D/, ""))

        if (entry["timestamp"] != "" && (entry["pages"] != 0 || entry["chapters"] != 0 || entry["running"] != 0))
            jsonData.push(entry)
    }
    jsonString = JSON.stringify(jsonData, null, 2)
    $("#result").html(jsonString)
    return jsonString
}
