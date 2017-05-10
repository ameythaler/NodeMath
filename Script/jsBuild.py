import sys

fileOrderFilename = sys.argv[1]
outputFilename = sys.argv[2]

with open(outputFilename, 'w') as outFile:
    with open(fileOrderFilename, 'r') as inFile:
        for line in inFile:
            line = line.strip()
            with open(line, 'r') as jsFile:
                outFile.write(jsFile.read() +'\n')
