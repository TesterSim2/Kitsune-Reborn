<?php
$pageTitle = $pageTitle ?? 'GoldenNetwork';
$bodyClass = $bodyClass ?? '';
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title><?= htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8'); ?></title>
    <link rel="icon" href="https://ssl.gstatic.com/docs/doclist/images/infinite_arrow_favicon_5.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <link href="/css/primary.css" rel="stylesheet" />
  </head>
  <body class="<?= htmlspecialchars($bodyClass, ENT_QUOTES, 'UTF-8'); ?>">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top py-3" id="mainNav">
      <div class="container">
        <a class="navbar-brand" href="/index.html"><strong>GoldenNetwork</strong></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="/selection3.html">Games</a></li>
            <li class="nav-item"><a class="nav-link" href="/contributors.html">Staff &amp; Contributors</a></li>
          </ul>
          <a
            class="btn btn-primary ms-lg-3 mt-3 mt-lg-0"
            href="https://github.com/titaniumnetwork-dev"
            target="_blank"
            rel="noreferrer noopener"
          >
            Check us out on GitHub!
          </a>
        </div>
      </div>
    </nav>

    <main class="flex-grow-1 pt-5">
      <div class="container py-5">
