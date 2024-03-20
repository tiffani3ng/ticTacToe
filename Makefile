# Makefile for web deployment

all: PutHTML

PutHTML:
  cp ticTacToe.html /var/www/html/ticTacToe/
  cp ticTacToe.css /var/www/html/ticTacToe/
  cp ticTacToe.js /var/www/html/ticTacToe/

	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/ticTacToe/
