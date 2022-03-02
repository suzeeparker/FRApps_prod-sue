#!/bin/bash

   aHost=vultr-FormR0-nimda;
                            if [ "$1" != "" ]; then aHost=$1;    fi
   aWebDir=/webs/FRApps;    if [ "$2" != "" ]; then aWebDir=$2=; fi
   aBuild=build;            if [ "$3" != "" ]; then aBuild=$3;   fi

 if [ "${aHost}" == "" ]; then

#   echo ""
    echo "  Usage: ./deploy.sh {Host} {WebDir} {BuildDir}"
    echo ""
    echo "   After running, npm run build, deploy the static React files to remote host server"
    echo ""
    echo "   {Host}     - must be in .ssh/config for SSH and SCP to login to remote server"
    echo "   {WebDir}   - path to web folder in remote server, e.g. /webs/FRApps"
    echo "                note: web files are saved to {WebDir}/client/{AppName}/{BuildDir}"
    echo "   {BuildDir} - local folder containing static React Files. Default: build"
    echo ""
    exit
    fi

 aCurDir=$( dirname $0 ); cd ${aCurDir}; aCurDir=$( pwd -P )
 aDirApp=$( echo $aCurDir | awk '{ n = split( $0, a, "/" ); print a[n-1]"/"a[n] }' )

 echo "" 
 echo "*************************************************************************************************"
 echo ""
 echo "  Copying files from ./${aBuild} to: ${aHost}:/webs/FRApps/${aDirApp}/${aBuild}"
 echo ""

 echo "  $  ssh  ${aHost}  mkdir -p ${aWebDir}/${aDirApp}/${aBuild}"
 echo "  $  scp -r build/* ${aHost}:${aWebDir}/${aDirApp}/${aBuild}/"
 echo ""
            ssh  ${aHost}  mkdir -p ${aWebDir}/${aDirApp}/${aBuild}    >/dev/null 2>&1
            scp -r build/* ${aHost}:${aWebDir}/${aDirApp}/${aBuild}/

 echo "*************************************************************************************************"



