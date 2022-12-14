var barcolors={
    "CPIM": "red",
    "INC": "#166a2f",
    "INC+": "#166a2f",
    "CPI": "red",
    "IUML": "blue",
    "IND": "grey",
    "Others": "#797979",
    
    "BJP": "#F39200",
    "BJP +": "#F39200",
    "SP": "#3AAA35",
    "SP +": "#3AAA35",
    "INC": "#3AAA35",
    "BSP": "#36A9E1",
    "NPF": "#28357F",
    "NPP": "#EEA801",
    "AAP": "#0474AB",
    "SAD": "#3B2F85",
    "SAD +": "#3B2F85",
    "MGP": "#e6980b"
}
function stackedBar(selector, dataSource, stCode, props, tipSel) {
    var voteShare = (function() {
        voteShare = null;
        jQuery.ajax({
            'async': false,
            'global': false,
            'dataType': 'json',
            'cache': false,
            'url': dataSource,
            'success': function(data) {
                // console.log(dataSource)
                if((dataSource == "data/voteshare.json") || (dataSource == "data/seatshare.json") ) {
                    // console.log(data[stCode]);
                    voteShare = data[stCode];
                } 
                else if ( (dataSource == "https://thefederal.com/api/scraper.php?m=election2022_result&t=partywise_result") || (dataSource == "data/party2022data.json")) {
                    // console.log(dataSource)
                    voteShare = data["data"][stCode]
                }
                else {
                    // console.log(data["data"][stCode]["parties"]);
                    voteShare = data["data"][stCode]["parties"];
                }
            }
        });
        return voteShare;
    })();
    // console.log(voteShare)
    var tooltip = d3.select(tipSel);

    var barchart = d3.select(selector)
        barchart.html(null)
    
    var addWrapper = barchart.append("div")
        .attr("class", "stackedBar")
    addWrapper.selectAll(".block")
    .data(voteShare).enter()
    .append("div").attr("class", "block")
    .style("background-color", function(d,i){
        // console.log(barcolors[d[props["label"]]])
        return barcolors[d[props["label"]]];
    })
    .style("width", function(d,i){
        return Math.round(d[props["valueper"]])+"%";
    })
    .html(function(d,i){
        if(d[props["valueper"]] > 6) {
            return '<span class="value">'+Math.round(d[props["valueper"]])+'% </span> <span class="label">'+d[props["label"]]+'</span>';
        } else {
            return '<span class="value">'+Math.round(d[props["valueper"]])+'% </span>';
        }
    })
    .on("mousemove", function(d){
        var x = $(this).position();
        var wide = $(this).width();
        // console.log(wide)
        tooltip
          .style("left", x.left + (wide/2) + "px")
          .style("top", x.top - 28 + "px")
          .style("display", "inline-block")
          .html(d[props["label"]] + ": " + Math.round(d[props["valueper"]])+ "%" );
    })
        .on("mouseout", function(d){ tooltip.style("display", "none");});
}

stackedBar("#up2017-seatShare", 'data/seatshare.json', "up_share2017", {
    "type": "Seatshare",
    "valueper": "seat%",
    "label": "party",
    // "value": "votes"
}, "#up2017seatTip")
stackedBar("#up2017-Religon", 'data/seatshare.json', "up_share2017", {
    "type": "Seatshare",
    "valueper": "seat%",
    "label": "party",
    // "value": "votes"
}, "#up2017Religon")
stackedBar("#up2017-voteShare", 'data/voteshare.json', "up_share2017", {
    "type": "Voteshare",
    "valueper": "leading%",
    "label": "party",
    // "value": "votes"
}, "#up2017voteTip")
stackedBar("#uk2017-seatShare", 'data/seatshare.json', "uk_share2017", {
    "type": "Seatshare",
    "valueper": "seat%",
    "label": "party",
    // "value": "votes"
}, "#uk2017seatTip")
stackedBar("#uk2017-voteShare", 'data/voteshare.json', "uk_share2017", {
    "type": "Voteshare",
    "valueper": "leading%",
    "label": "party",
    // "value": "votes"
}, "#uk2017voteTip")
stackedBar("#mn2017-seatShare", 'data/seatshare.json', "mn_share2017", {
    "type": "Seatshare",
    "valueper": "seat%",
    "label": "party",
    // "value": "votes"
}, "#mn2017seatTip")
stackedBar("#mn2017-voteShare", 'data/voteshare.json', "mn_share2017", {
    "type": "Voteshare",
    "valueper": "leading%",
    "label": "party",
    // "value": "votes"
}, "#mn2017voteTip")
stackedBar("#pb2017-seatShare", 'data/seatshare.json', "pb_share2017", {
    "type": "Seatshare",
    "valueper": "seat%",
    "label": "party",
    // "value": "votes"
}, "#pb2017seatTip")
stackedBar("#pb2017-voteShare", 'data/voteshare.json', "pb_share2017", {
    "type": "Voteshare",
    "valueper": "leading%",
    "label": "party",
    // "value": "votes"
}, "#pb2017voteTip")
stackedBar("#ga2017-seatShare", 'data/seatshare.json', "ga_share2017", {
    "type": "Seatshare",
    "valueper": "seat%",
    "label": "party",
    // "value": "votes"
}, "#ga2017seatTip")
stackedBar("#ga2017-voteShare", 'data/voteshare.json', "ga_share2017", {
    "type": "Voteshare",
    "valueper": "leading%",
    "label": "party",
    // "value": "votes"
}, "#ga2017voteTip")




stackedBar("#up2022-seatShare", 'data/party2022data.json', "up", {
    "type": "Seatshare",
    "valueper": "seat%",
    "label": "party",
    // "value": "votes"
}, "#up2022seatTip");
// stackedBar("#uk2022-seatShare", 'https://thefederal.com/api/scraper.php?m=election2022_result&t=partywise_result', "uk", {
//     "type": "Seatshare",
//     "valueper": "seat%",
//     "label": "party",
//     // "value": "votes"
// }, "#uk2022seatTip");
// stackedBar("#mn2022-seatShare", 'https://thefederal.com/api/scraper.php?m=election2022_result&t=partywise_result', "mp", {
//     "type": "Seatshare",
//     "valueper": "seat%",
//     "label": "party",
//     // "value": "votes"
// }, "#mn2022seatTip");
// stackedBar("#pb2022-seatShare", 'https://thefederal.com/api/scraper.php?m=election2022_result&t=partywise_result', "pu", {
//     "type": "Seatshare",
//     "valueper": "seat%",
//     "label": "party",
//     // "value": "votes"
// }, "#pb2022seatTip");
// stackedBar("#ga2022-seatShare", 'https://thefederal.com/api/scraper.php?m=election2022_result&t=partywise_result', "go", {
//     "type": "Seatshare",
//     "valueper": "seat%",
//     "label": "party",
//     // "value": "votes"
// }, "#ga2022seatTip");
// stackedBar("#up2022-voteShare", 'data/voteshare.json?v=453', "up_share2017", {
//     "type": "Voteshare",
//     "valueper": "leading%",
//     "label": "party",
//     // "value": "votes"
// }, "#up2022voteTip");
// stackedBar("#ga2022-voteShare", 'data/voteshare.json?v=453', "ga_share2022", {
//     "type": "Voteshare",
//     "valueper": "leading%",
//     "label": "party",
//     // "value": "votes"
// }, "#ga2022voteTip")
// stackedBar("#mn2022-voteShare", 'data/voteshare.json?v=453', "mn_share2022", {
//     "type": "Voteshare",
//     "valueper": "leading%",
//     "label": "party",
//     // "value": "votes"
// }, "#mn2022voteTip");
// stackedBar("#pb2022-voteShare", 'data/voteshare.json?v=453', "pb_share2022", {
//     "type": "Voteshare",
//     "valueper": "leading%",
//     "label": "party",
//     // "value": "votes"
// }, "#pb2022voteTip")
// stackedBar("#uk2022-voteShare", 'data/voteshare.json?v=453', "uk_share2022", {
//     "type": "Voteshare",
//     "valueper": "leading%",
//     "label": "party",
//     // "value": "votes"
// }, "#uk2022voteTip")