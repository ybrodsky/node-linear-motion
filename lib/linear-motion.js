/**
*	Checks whether two values are valid to be operated with
*	@param {Float} operandA
*	@param {Float} operandB
*	@return {Boolean}
*/
const areValuesValid = (operandA, operandB) => {
	if(isNaN(operandA) || isNaN(operandB)) return false;

	if(operandA === null || operandB === null) return false;

	return true;
}

/**
*	Rounds a value to a max of two decimals
*	@param {Float} val
*	@return {Float}
*/
const round = (val) => {
	return Math.round(val * 100) / 100;
}

/**
*	Calculates the time in relation to the velocity and the distance
*	@param {Float} velocity
*	@param {Float} distance
*	@return {Float}
*/
const calculateTime = (velocity, distance) => {
	if(areValuesValid(velocity, distance) === false)
		return 0;

	if(parseFloat(velocity) === 0)
		return 0;

	return round(distance / velocity);
}

/**
*	Calculates the velocity in relation to the time and the distance
*	@param {Float} time
*	@param {Float} distance
*	@return {Float}
*/
const calculateVelocity = (time, distance) => {
	if(areValuesValid(time, distance) === false)
		return 0;

	if(parseFloat(time) === 0)
		return 0;

	return round(distance / time);
}

/**
*	Calculates the distance in relation to the velocity and the time
*	@param {Float} velocity
*	@param {Float} time
*	@return {Float}
*/
const calculateDistance = (velocity, time) => {
	if(areValuesValid(velocity, time) === false)
		return 0;

	return round(velocity * time);
}

module.exports = { areValuesValid, calculateTime, calculateVelocity, calculateDistance }