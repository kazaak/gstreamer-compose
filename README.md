# GSTREAMER COMPOSE
This is a simple electron app that allows a user to create and save sources of video and audio streams (rtsp, rtp) and compose up to four of those sources together with file streams.  The user may either view the composed stream or record it.

## COMPONENTS
There are two primary components of the application: first, obviously, the electron app itself.  The second component is an express webserver which may optionally be run standalone.

The webserver provides a number of RESTFUL endpoints which support the electron application.  It helps separate business logic from the application.  Additionally, it could be served in docker containers to support a more enterprise application.

## TECHNOLOGY

* Typescript
* Angular2
* BreezeJS: Javascript Library implementing support for LINQ style queries of OData sources and general Javascript models.
* Bootstrap: for stylesheets
* Less: just because
* ng2-bootstrap: Angular2 native implementations of bootstrap javascript components
* ag-grid: https://www.ag-grid.com/ - my favorite javascript grid.
* Electron
* Bower
* Gulp
