angular.module('myApp',[]).controller('myController', function($scope){
	
	$scope.addPerson = function(){
		$scope.students.push({name: $scope.newName, desc: $scope.newDesc});
		$scope.newName = "";
		$scope.newDesc = "";
	}

	$scope.removeStudent = function(studentToRemove){
		var i = $scope.students.indexOf(studentToRemove)
		$scope.students.splice(i,1); 

		}

	$scope.students = [
		{
			name : 'Freddy',
			desc : 'the mucinex add'
		},
		{
			name : 'Chance',
			desc : 'the cooliest'
		},
		{
			name : 'Will',
			desc : 'the wig dude'
		},
		{
			name : 'Stephen',
			desc : 'the good at this shit'
		},
		{
			name : 'griffin',
			desc : 'the dota2 addict'
		},
		{
			name : 'oli',
			desc : 'the hotdick'
		},
		{
			name : 'yohsuke',
			desc : 'asian wayne gretsky'
		},
	];
});