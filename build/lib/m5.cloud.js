/*
 @@@@@@@@@@@@@>      @@@@@@@@@@>
 @>    @@@>  @>      @>         
 @>     @>   @>      @@@@@@@@@@>
 @>          @>               @>
 @>          @>               @>
 @>          @>      @@@@@@@@@>       

 (c) Scott Persinger 2011. See LICENSE.txt for license.
 
 M5 cloud
*/
M5.require("jQuery");

M5.cloud = (function() {
  var api_endpoint = "http://api.m5apps.org";
  
  return {
    scrape: scrape,
    proxy: proxy,
    endpoint: api_endpoint
  }
  
  function scrape(url, body, callback, error_callback) {
    $.post(
        api_endpoint + "/scrape",
        {url: url, body: body, agent: 'Desktop'}, 
        callback,
        'json').error(error_callback || general_error);
  }
  
  function proxy() {
    
  }
  
  function general_error(event, jqXHR, thrownError) {
    console.log("Ajax error: " + thrownError);
  }
})();