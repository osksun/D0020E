/**
 * @fileOverview Class for parsing WideFind data to standardized json format
 */

/**
 *     Outputs standardized JSON format
 *  @param data Data to parse
 *  @return {JSON} The input data in JSON format
 */
module.exports.jsonify = function (data) {
  var json = {
    version: 1,
    action: 0,
    entities: []
  }

  json.entities.push({
    id: data.id,
    type: 'human',
	  position: {
		  x: data.pos[0],
		  y: data.pos[2],
		  z: data.pos[1]
	  },
	  velocity: {
		  x: data.vel[0],
		  y: data.vel[2],
		  z: data.vel[1]
	  },
	  battery: 0.9, //data.bat,
	  signal: data.rssi
  })

  return JSON.stringify(json)
}
